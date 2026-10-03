import os

# Define que os ficheiros serão criados no diretório atual (onde o script está a correr)
DIRETORIO_ATUAL = "."

# Criação das subpastas necessárias (css e img)
os.makedirs(f"{DIRETORIO_ATUAL}/css", exist_ok=True)
os.makedirs(f"{DIRETORIO_ATUAL}/img", exist_ok=True)

# --- CONTEÚDO: index.html ---
html_index = """<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>I&T Solutions - Sua Ideia, Nossa Tecnologia</title>
    <!-- Bootstrap 5 CDN -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Bootstrap Icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div class="container">
            <a class="navbar-brand fw-bold" href="#">I&T Solutions</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link" href="#inicio">Início</a></li>
                    <li class="nav-item"><a class="nav-link" href="#sobre">Sobre Nós</a></li>
                    <li class="nav-item"><a class="nav-link" href="#produtos">Nossos Produtos</a></li>
                    <li class="nav-item"><a class="nav-link" href="#contato">Contato</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <header id="inicio" class="hero-section text-center text-white d-flex align-items-center">
        <div class="container">
            <h1 class="display-3 fw-bold mb-4">I&T Solutions</h1>
            <h2 class="fs-4 mb-5 fw-light">Sua Ideia, Nossa Tecnologia.</h2>
            <a href="#contato" class="btn btn-primary btn-lg px-5 rounded-pill shadow">Fale Conosco</a>
        </div>
    </header>

    <!-- Sobre Nós -->
    <section id="sobre" class="py-5 bg-light">
        <div class="container py-4">
            <div class="row align-items-center">
                <div class="col-lg-6 mb-4">
                    <h2 class="fw-bold mb-3">Inovação em Desenvolvimento</h2>
                    <p class="lead text-muted">Somos uma empresa dedicada a transformar ideias complexas em soluções digitais simples e eficientes.</p>
                    <p>Com foco em desenvolvimento de aplicativos móveis e sistemas web, a I&T Solutions desenvolve ferramentas que otimizam a rotina de profissionais e empresas. Nossa arquitetura garante segurança, escalabilidade e performance.</p>
                </div>
                <div class="col-lg-6 text-center">
                    <i class="bi bi-code-slash text-primary" style="font-size: 8rem;"></i>
                </div>
            </div>
        </div>
    </section>

    <!-- Produtos (Ex: Roterizador PRO) -->
    <section id="produtos" class="py-5">
        <div class="container py-4 text-center">
            <h2 class="fw-bold mb-5">Nossas Soluções</h2>
            <div class="row justify-content-center">
                <div class="col-md-4 mb-4">
                    <div class="card h-100 shadow-sm border-0">
                        <div class="card-body p-4">
                            <i class="bi bi-geo-alt-fill text-primary mb-3" style="font-size: 3rem;"></i>
                            <h4 class="card-title fw-bold">Roterizador PRO</h4>
                            <p class="card-text text-muted">Aplicativo de ponta para otimização inteligente de rotas, navegação GPS e controle financeiro para motoristas de entrega.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contato -->
    <section id="contato" class="py-5 bg-dark text-white">
        <div class="container py-4 text-center">
            <h2 class="fw-bold mb-5">Entre em Contato</h2>
            <div class="row justify-content-center">
                <div class="col-md-4 mb-4">
                    <i class="bi bi-envelope fs-1 text-primary mb-3"></i>
                    <h5 class="fw-bold">E-mail</h5>
                    <a href="mailto:itsolutions0709@gmail.com" class="text-white text-decoration-none">itsolutions0709@gmail.com</a>
                </div>
                <div class="col-md-4 mb-4">
                    <i class="bi bi-whatsapp fs-1 text-success mb-3"></i>
                    <h5 class="fw-bold">WhatsApp</h5>
                    <a href="https://wa.me/5588993118230" target="_blank" class="text-white text-decoration-none">+55 (88) 99311-8230</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-black text-white text-center py-4">
        <div class="container">
            <p class="mb-1">&copy; 2026 I&T Solutions. Todos os direitos reservados.</p>
            <p class="small text-muted mb-0">Representante Legal: Igor Mikael dos Santos | CNPJ/D-U-N-S Registrado</p>
            <div class="mt-3">
                <a href="politica-privacidade.html" class="text-primary text-decoration-none small">Política de Privacidade</a>
            </div>
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
"""

# --- CONTEÚDO: style.css ---
css_style = """
body {
    font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
}

.hero-section {
    background: linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.9)), url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1920&q=80') center/cover;
    height: 100vh;
    min-height: 500px;
}

.bg-dark {
    background-color: #0f172a !important; /* Grafite escuro / Azul marinho */
}

.text-primary {
    color: #3b82f6 !important; /* BluePrincipal */
}

.btn-primary {
    background-color: #3b82f6;
    border-color: #3b82f6;
}

.btn-primary:hover {
    background-color: #2563eb;
    border-color: #2563eb;
}
"""

# --- CONTEÚDO: politica-privacidade.html ---
html_privacidade = """<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Política de Privacidade - I&T Solutions</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
</head>
<body class="bg-light">
    <nav class="navbar navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand fw-bold" href="index.html"><i class="bi bi-arrow-left me-2"></i> I&T Solutions</a>
        </div>
    </nav>
    <div class="container py-5">
        <div class="card shadow-sm border-0 p-4 p-md-5">
            <h1 class="fw-bold mb-4">Política de Privacidade</h1>
            <p class="text-muted">Última atualização: Outubro de 2026</p>
            
            <h4 class="mt-4">1. Coleta de Dados</h4>
            <p>A I&T Solutions coleta informações estritamente necessárias para o funcionamento de nossos aplicativos (como o Roterizador PRO), incluindo dados de localização em segundo plano, essenciais para a funcionalidade de navegação GPS e rastreamento de rotas logísticas.</p>
            
            <h4 class="mt-4">2. Uso das Informações</h4>
            <p>Os dados coletados são utilizados exclusivamente para fornecer as funcionalidades do aplicativo, autenticação de usuários e manutenção de assinaturas. Não comercializamos dados pessoais com terceiros.</p>

            <h4 class="mt-4">3. Segurança</h4>
            <p>Implementamos rigorosas medidas de segurança, incluindo criptografia na comunicação com nossos servidores e tokenização de dados de pagamento (via Mercado Pago), garantindo a proteção das suas informações.</p>

            <h4 class="mt-4">4. Contato</h4>
            <p>Para dúvidas sobre privacidade ou para solicitar a exclusão permanente dos seus dados, entre em contato através do e-mail: <strong>itsolutions0709@gmail.com</strong>.</p>
        </div>
    </div>
</body>
</html>
"""

# --- ESCRITA DOS ARQUIVOS NA PASTA ATUAL ---
with open(f"{DIRETORIO_ATUAL}/index.html", "w", encoding="utf-8") as f:
    f.write(html_index)

with open(f"{DIRETORIO_ATUAL}/css/style.css", "w", encoding="utf-8") as f:
    f.write(css_style)

with open(f"{DIRETORIO_ATUAL}/politica-privacidade.html", "w", encoding="utf-8") as f:
    f.write(html_privacidade)

print("✅ Ficheiros da I&T Solutions gerados com sucesso na pasta atual!")
print("Agora basta iniciar o repositório Git, fazer o commit e hospedar como Static Site no Render.")