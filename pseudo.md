# This section will allow users to sign up or login to their accounts
Login on homepage using credntials
Login(credentials, try_limit){
if(credentials ==="credentials_in_database" ){
    login to homepage;
}else{
   # retry login
}else if(trials = trial_limits){
   # Recorver password
   Recorver_password(email_address,database_email, token){
   # user inputs their email to be sent a recorvery token
   if(email==="database_email")
   # user checks email and use the token to change password
   }
}
}



# Researcher Homepage
Homepage(Researcher_email, ){
  # fetch user data associated with researcher_email
  Populate_user_data;
  Download(file_status, museum){
  # Access museum repository to download
  if(file_status === 'avaliable'){
    Download from museums;
  }else{
    Download failed;
  }
  }
  # Upload a file
  upload(file_status, museum){
  # Access museum repository to upload for review
  if(file_status === 'avaliable'){
    Upload to museums;
  }else{
    Upload failed;
  }
  }
}

# Museum Admin Homepage
Homepage(admin_email, department, repository ){
  # fetch user data associated with admin_email
  Populate_user_data;
  Open Dashboard;
  Publish_articles(){
 # get deprtment and repository
 Publish;
  }
  Create_accession_manager(email, access_code){
  # get deprtment and repository
  Create(email, access_code);
  }
   # get deprtment and repository
   Delete OR add repository;
}

# Accession Manager Homepage
Homepage(email, department, repository){
    Upload_data;
    logout;
}