function tolower(o) {
		    var build, key, destKey, value;
		    
		    if (o instanceof Array) {
		        build = [];
		        for (key in o) {
		            value = o[key];

		            if (typeof value === "object") {
		                value = tolower(value);
		            }
		            else{
		            	value = (value.toLowerCase()).toString();
		            }
		            build.push(value);
		        }
		    } else {
		        build = {};
		        for (key in o) {
		            destKey = (key.toLowerCase()).toString();
		            value = o[key];
		            if (typeof value === "object") {
		                value = tolower(value);
		            }
		            else if(typeof value === "boolean"  || typeof value === "number"){
		            	value = value;
		            }
		            else{
		            	value = (value.toLowerCase()).toString();
		            }
		            build[destKey] = value;
		        }
		    }
		    return build;
	}