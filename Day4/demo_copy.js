const fs = require('fs');

fs.readFile('file1.txt', 'utf8', (err, data1) => {
    if (err) {
        throw err;
    }
    console.log('Contents of file1.txt:', data1);  

    fs.readFile('file2.txt', 'utf8', (err, data2) => {
        if (err) {
            throw err;
        }
        console.log('Contents of file2.txt:', data2);  
        //ghép lại
        const mergedContent = data1 + data2;

        fs.writeFile('file3.txt', mergedContent, 'utf8', (err) => {
            if (err) {
                throw err;
            }
            console.log('Files merged successfully!');
        });
    });
});
