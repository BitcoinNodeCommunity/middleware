# Define version & use pinned images
ARG NODE_VERSION=16

# Build on the host architecture, change this if you're building on arm64
FROM amd64/node:${NODE_VERSION}-alpine@sha256:425c81a04546a543da824e67c91d4a603af16fbc3d875ee2f276acf8ec2b1577 as node-builder
# Use multi-arch image for running the app
FROM node:${NODE_VERSION}-alpine@sha256:2c6c59cf4d34d4f937ddfcf33bab9d8bbad8658d1b9de7b97622566a52167f2b as node-runner


# DEPENDENCIES
FROM node-builder as dependencies
# Create app directory
WORKDIR /app
# The current working directory
COPY . .
# Install production dependencies
RUN yarn workspaces focus -A --production
# Delete TypeScript code and markdown files to further reduce image size
RUN find /app/node_modules | grep ".\.ts" | grep -v "c-lightning\.ts" | xargs rm


# BUILD (production)
FROM node-builder as builder
# Change directory to '/app'
WORKDIR /app
# The current working directory
COPY . .
# Install dependencies
RUN yarn install
# Build TS code
RUN yarn build
# Delete everyhing we don't need in the next stage
RUN rm -rf node_modules tsconfig.tsbuildinfo *.ts **/*.ts .eslint* .git* .prettier* .vscode* tsconfig.json .yarn* yarn.lock


# PRODUCTION
FROM node-runner AS production
# Copy built code from build stage to '/app' directory
COPY --from=builder /app /app
# Copy node_modules
COPY --from=dependencies /app/node_modules /app/node_modules
# Change directory to '/app'
WORKDIR /app
EXPOSE 3006
CMD [ "node", "--experimental-json-modules", "bin/www.mjs" ]


# DEVELOPMENT
FROM node-builder AS development
# Change directory to '/app'
WORKDIR /app
# Copy dependency management files
COPY package.json yarn.lock ./
# Install dependencies
RUN yarn install
# NOTE: Using project files from mounted volumes
EXPOSE 3006
CMD [ "yarn", "dev" ]
