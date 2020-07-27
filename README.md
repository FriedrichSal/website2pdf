# website2pdf

This project usess Puppeteer and node.js to create a pdf of any website. It is based on the buildkite/puppeteer docker image.


## Getting started

To get started, build the docker image:

```
docker build -t website2pdf:latest .
```

The service writes the pdf files into the `/pdf` folder of the container. So if you want to access the pdf files you need to mount a local folder. Here we mount the `/tmp` folder as the container's `/pdf` directory. 

```
docker run -p 3000:3000 --mount type=bind,source=/tmp,target=/pdf website2pdf:latest 
```

If all goes well the service is now running on localhost:3000. So now you can do 

```
http://localhost:3000/?url=http://www.google.com&filename=google.pdf
```

