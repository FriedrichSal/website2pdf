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

## Customisations
In the file `aspdf.js` you can select a selector to wait for in the variable `selector_to_wait_for` as well as changing the timeout for waiting for that selector to appear.

