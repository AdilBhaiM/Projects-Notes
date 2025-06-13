FROM node

WORKDIR /app\
RUN npm install -g nodemon

COPY . .
EXPOSE 5001

CMD ["nodemon", "src/index.js"]