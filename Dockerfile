# FROM node:alpine AS builder

# WORKDIR /app

# COPY package.json yarn.lock ./

# RUN yarn install

# COPY . .

# RUN yarn build



# FROM nginx:alpine

# COPY --from=builder /app/.next /usr/share/nginx/html/.next
# COPY --from=builder /app/public /usr/share/nginx/html/public
# COPY --from=builder /app/next.config.ts /usr/share/nginx/html/next.config.ts

# COPY nginx.conf /etc/nginx/nginx.conf

# EXPOSE 80
# #EXPOSE 11434

# CMD ["nginx", "-g", "daemon off;"]



FROM node:alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 3000

CMD [ "yarn", "dev" ]