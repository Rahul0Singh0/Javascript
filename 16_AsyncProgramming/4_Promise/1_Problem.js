// Taking a problem to solve using Callback and try to understand use of Promise
/**
 * Implement a set of dummy functions which can mimic the behavior of the following functions:
 * 1. download -> This function should mimic downloading of something from a url
 * 2. writeFile -> This function should mimic writing of some content to a file
 * 3. upload -> This function should mimic uploading the file to a server
 * 
 * Now after you've implemented these functions, try to use them in a scenario where we first 
 * download a file, then write it to a disk and then upload it to a server. 
 * */ 

/**
 * What to do after downloading the data??
 * The Process of downloading & what to do with the downloaded data 
 * is independent of each other
 * 
 * What to do after downloading can be decided by who so ever is calling
 * our download func
 */


/**
 * Optional Chaining Operator (?.):
 * It accesses an object's property or calls a function. If the object
 * accessed or function called using this operator is undefined or null,
 * the expression short circuits and evaluate to undefined instead of throwing 
 * an error.
 */
function download(url, callback) {
    console.log("Downloading from ", url);
    // time consuming task
    setTimeout(() => {
        console.log("Download is done");
        let downloadedData = "Some data";
        callback?.(downloadedData);
    }, 3000)
}

function writeFile(data, fileName, callback) {
    // fileName tells the name of the file to be created in which data will be written
    console.log("written to file",fileName, "is started");
    setTimeout(() => {
        console.log("writing to file", fileName, "is done");
        callback?.();
    }, 2000);
}

function upload(fileName, url, callback) {
    // fileName tells the name of the file to be upload
    console.log("Uploading file ", fileName, " to ", url);
    setTimeout(() => {
        console.log("upload is done");
        let uploadStatus = "Success";
        callback?.(uploadStatus);
    }, 3000);
}


function process() {
    download("https://www.example.com", (data) => {
        writeFile(data, "file.txt", (status) => {
            upload("file.txt", "https://www.example.com", (uploadStatus) => {
                console.log("All done");
            });
        });
    });
}

process();
