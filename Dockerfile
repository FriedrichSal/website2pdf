FROM buildkite/puppeteer
RUN npm install fastify && npm install moment && npm install fastify-cli --global
EXPOSE 3000
COPY . /app
WORKDIR "/app/"
ENV FASTIFY_WATCH "True"
CMD ["node", "server.js"]


