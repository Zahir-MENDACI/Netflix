package com.ynov.netflix.posters.models;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Date;
import java.util.Map;

import javax.persistence.Column;

import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonFormat.Shape;

@Document(collection = "posters")
public class Poster implements Serializable{
    private String id;
    private String idContent;
    private String urlMorning;
    private String urlEvening;

	public Poster () {

    }

    public Poster (String id, String idContent,String urlMorning, String urlEvening) {
        this.id = id;
        this.idContent = idContent;
        this.urlMorning = urlMorning;
        this.urlEvening = urlEvening;
    }
    

//    public Patient(Map<String, Object> map) {
//        this.id = (String) map.get("id");
//        this.name = (String) map.get("name");
//        this.age = (long) map.get("age");
//        this.doctor = (String) map.get("doctor");
//      }
    
    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public String getIdContent() {
        return idContent;
    }
    public void setIdContent(String idContent) {
        this.idContent = idContent;
    }
    public String getUrlMorning() {
        return urlMorning;
    }
    public void setUrlMorning(String urlMorning) {
        this.urlMorning = urlMorning;
    }
    
    public String getUrlEvening() {
        return urlEvening;
    }
    public void setUrlEvening(String urlEvening) {
        this.urlEvening = urlEvening;
    }

	
    
    
    
    
    
}