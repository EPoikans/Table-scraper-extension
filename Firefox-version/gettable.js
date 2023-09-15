var tables = document.getElementsByTagName("table");
var tablesarray = Array.prototype.slice.call(tables);
if(tablesarray !== null && tablesarray !== undefined){
	var tablecount = tablesarray.length;
	if (tablecount > 0) {
		for(let i=0; i<tablecount; i++){
			String(tablesarray[i]).replaceAll('checked="checked">', '>+');
			String(tablesarray[i]).replaceAll('color="#FF0000">', '>red');
			String(tablesarray[i]).replaceAll('color="#FFFF00">', '>yellow');
			String(tablesarray[i]).replaceAll('color="#00FF00">', '>green');
			String(tablesarray[i]).replaceAll('color="#0000FF">', '>blue');
			String(tablesarray[i]).replaceAll(/color="#[a-f0-9A-F]{6}">/g, '>Color ????');
			console.log(tablesarray[i]);
			var outfile = new XMLSerializer().serializeToString(tablesarray[i]);
			console.log(outfile);
			var fileblob = new Blob([outfile], {type: "text/xml"});
			console.log(fileblob);
			var fileurl = window.URL.createObjectURL(fileblob);
			console.log(fileurl);
			const a = document.createElement("a");
			document.body.appendChild(a);
			a.href = fileurl;
			a.download = "tabledata.xml";
			a.click();
		}
	}
}