# Status do Deploy — Hostinger ✅ NO AR

Última atualização: 2026-05-21

## Estado atual

- **Site no ar:** https://srcatributario.adv.br
- **Build + deploy automatizado** via GitHub Actions a cada push em `main`
- Rotas verificadas com `200 OK`: `/`, `/sobre/`, `/blog/`, `/blog/<slug>/`, `/sitemap.xml`

## Setup final

### Conta FTP (Hostinger)

Criada uma conta FTP **scoped ao domínio** (essencial — a conta FTP principal da Hostinger cai num chroot diferente do que o LiteSpeed serve):

- Hostname: `ftp.srcatributario.adv.br`
- Diretório: `/home/u114826194/domains/srcatributario.adv.br/public_html`
- Usuário: `u114826194.deploy`
- Senha: armazenada **apenas no secret `FTP_PASSWORD` do GitHub** (não no repo)

Para gerenciar/trocar senha: hPanel → Arquivos → Contas FTP → `u114826194.deploy` → Mudar senha

### Secrets do GitHub

(https://github.com/adibjx/srca-institucional/settings/secrets/actions)

- `FTP_HOST` = `ftp.srcatributario.adv.br`
- `FTP_USER` = `u114826194.deploy`
- `FTP_PASSWORD` = (a do hPanel)
- `FTP_PORT` = `21`
- `FTP_PROTOCOL` = `ftps`
- `FTP_SERVER_DIR` = `./` (a conta já está chrooted no diretório certo)
- `NEXT_PUBLIC_SITE_URL` = `https://srcatributario.adv.br`
- `NEXT_PUBLIC_GTM_ID` = `GTM-NXFD7QHC`

## Fluxo de manutenção

Qualquer alteração no site (correção de texto, artigo novo no blog, etc.):

1. Edita o código local
2. `git commit` + `git push origin main`
3. Workflow roda automaticamente (~3 min: build + upload via FTP)
4. Site atualizado

Para forçar redeploy sem mudança: Actions → "Build and Deploy to Hostinger" → Run workflow.

## Aprendizado pra referência futura

A conta FTP principal da Hostinger (`u114826194`) tem chroot que **não corresponde** à pasta servida pelos domínios. O LiteSpeed serve a partir de `/home/<user>/domains/<domain>/public_html/`, mas a conta FTP principal cai em outro lugar (provavelmente `/home/<user>/` com `public_html/` sendo uma pasta local, sem relação com Apache).

Solução: criar conta FTP adicional pelo hPanel apontando explicitamente para o diretório do domínio. Daí o chroot bate com o que o servidor web serve.

## Referências

- Repo: https://github.com/adibjx/srca-institucional
- Actions: https://github.com/adibjx/srca-institucional/actions
- Secrets: https://github.com/adibjx/srca-institucional/settings/secrets/actions
- hPanel: https://hpanel.hostinger.com
- Domínio: https://srcatributario.adv.br
