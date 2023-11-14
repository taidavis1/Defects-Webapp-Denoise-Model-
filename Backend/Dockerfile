FROM python:3.8
WORKDIR /backend


COPY requirements.txt requirements.txt
RUN pip install --upgrade pip
RUN pip install -r requirements.txt
EXPOSE 5000

COPY . .

CMD ["python" , "app.py"]

