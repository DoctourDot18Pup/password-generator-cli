# Password Generator CLI

Una herramienta de línea de comandos para generar contraseñas seguras, construida con Node.js, Commander.js y Chalk.

## Tecnologías

- **Node.js** v20
- **Commander.js** — manejo de argumentos y opciones CLI
- **Chalk** v4 — colores en la terminal
- **Docker** — entorno de desarrollo containerizado

## Instalación

### Requisitos
- Docker instalado
- WSL (en caso de Windows)

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/DoctourDot18Pup/password-generator-cli.git
cd password-generator-cli

# 2. Levantar el contenedor
docker compose up -d

# 3. Entrar al contenedor
docker exec -it npm_npx_practica bash

# 4. Instalar dependencias
npm install
```

## Uso

```bash
# Contraseña estándar (letras, números y símbolos)
node index.js <longitud>

# Solo con números
node index.js <longitud> --numbers

# Sin símbolos (letras y números)
node index.js <longitud> --no-symbols
```

### Ejemplos

```bash
node index.js 12
# Contraseña generada: aB3$kL9!mZ2#

node index.js 12 --numbers
# Contraseña generada: 482910573621

node index.js 16 --no-symbols
# Contraseña generada: aB3kL9mZ2xQpRtYu
```

## Opciones

| Opción | Descripción |
|---|---|
| `<longitud>` | Longitud de la contraseña (requerido) |
| `--numbers` | Genera la contraseña solo con números |
| `--no-symbols` | Genera la contraseña sin símbolos especiales |

## Estructura del proyecto

```
password-generator-cli/
├── index.js            # Lógica principal del CLI
├── package.json        # Configuración del proyecto y dependencias
├── docker-compose.yml  # Configuración del contenedor Docker
└── README.md
```
