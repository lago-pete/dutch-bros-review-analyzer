from pydantic_settings import BaseSettings



class Settings(BaseSettings):
    google_api_key: str
    database_url: str
    app_name: str = "Dutch Bros Analyzer"
    debug: bool = False
    
    class Config:
        env_file = ".env"
        

settings = Settings()
        