if(window.location.hash && window.location.hash.split("=")[0] == "#invite_token")
	location = "https://"+window.location.hash+"/pingendocontrib/complete_signup?token="+window.location.hash.split("=")[1];

if(window.location.hash && window.location.hash.split("=")[0] == "#recovery_token")
	location = "https://"+window.location.hash+"/pingendocontrib/recovery_password?token="+window.location.hash.split("=")[1];
