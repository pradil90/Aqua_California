var meterMap = {
        "0":"wet.png",
        "1":"dry.png",
        "2":"dry-mod.png",
        "3":"mod.png",
        "4":"mod-sev.png",
        "5":"sev.png",
        "6":"sev-ext.png",
        "7":"ext.png",
        "8":"ext-exc.png",
        "9":"exc.png"
      };
$(document).ready(function () {
	
	$("#snapshot").html("<h2 class='block-title'>Drought Indicator</h2>") ;
    $("#snapshot").append("<div class='content clearfix'><div id='snapshot'>" +
			"<form id='zipform' method='post'><br/><center><fieldset>" +
			"<label for='zip'>Zip Code (5 digit):</label>" +
			"&nbsp;<input id='zip' name='zip' size='6' type='text' value='' />" +
			"&nbsp;<br><br><input id='zipsubmit' type='submit' style='width: 30px;' value='Go!' />" +
			"</fieldset></center></form>" +
			"<div id='snapshot-heading'>&nbsp;</div>" +
			"<div id='snapshot-results'>&nbsp;</div></div>");
	
	
	
	 $("#zipform").bind("submit", function(e) {    
	        e.preventDefault();
	        $("#snapshot-results").html("<p class='snapshot-heading'>Loading...</p>");
	        
	        // validate form data
	        var zip = $("#zip").val();
	        if (zip.length !=5 || isNaN(zip) ) {
	          $("#snapshot-results").html("<p class='snapshot-heading'>Invalid zip code...</p>");
	          return false;
	        }
	        var snapshoturl = "http://drought.gov/snapshot/zip?zip=" + zip;
	        $.getJSON(snapshoturl, null, function (results) {
	        	$("#snapshot-results").html(
	                    "<center><div id='meter'><img src='http://www.drought.gov/m/images/droughtmeter/" + meterMap[results.data.image] + "'/></div>" +
	                    "<p class='snapshot-heading'>Conditions for " + zip + "</p>" + 
	                    "<table class=\"ziptable\">" +
	                     "<tr>" +
	                      "<td>Drought Monitor Intensity<br/> (" + results.data.dmDate + ")</td>" +  
	                      "<td>" + results.data.dm + "</td>" +  
	                    "</tr>" +
	                    "<tr>" +
	                      "<td>Average Temperature<br/> (" + results.data.acisDate + ")</td>" +  
	                      "<td>" + results.data.temp + " &deg;F </td>" +  
	                    "</tr>" + 
	                    "<tr>" +
	                      "<td>Precipitation <br/> (" + results.data.acisDate + ")</td>" +  
	                      "<td>" + results.data.precip + " in. </td>" +  
	                    "</tr>" + 
	                    "<tr>" +
	                      "<td>Palmer Drought Severity Index<br/> (" + results.data.pdate + ")</td>" +  
	                      "<td>" + results.data.PDSI + "</td>" +  
	                    "</tr>" + 
	                    "</table></center>" 
	                    );
	                  $("#snapshot-results").append(
	                    "<div class='notes'>" +
	                      "<p>The Drought Monitor, Temperature and Precipitation values are based on the center of the zip code. The Palmer Index is based on the U.S. climate division where the zip code is located.</p>" +
	                    "</div>"
	                    );
	                  $("#snapshot-results").show();
	          });		
	        
	      });      
 });
