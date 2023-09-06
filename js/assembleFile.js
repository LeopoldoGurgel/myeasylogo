const fs = require('fs');

function assembleFile(text, textColor, shape, selectedShape){

        
    let fileText = `<text x="150" y="120" font-size="60" text-anchor="middle" fill="${textColor}">${text.toUpperCase()}</text>`

    if(shape == 'Triangle'){
        fileText = `<text x="150" y="145" font-size="40" text-anchor="middle" fill="${textColor}">${text.toUpperCase()}</text>`
    }
    
    const svgContent = `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="white" />
  ${selectedShape.render()}
  ${fileText}
</svg>
`

fs.writeFile(`./SVGs/${text}.svg`, svgContent, (err) => {
    if(err){
        console.log("Error creating SVG:", err);
        
    }else{
        console.log("SVG file created successfully at SVGs folder.");
        // console.log(selectedShape.render())
    }
})
}

module.exports = assembleFile;