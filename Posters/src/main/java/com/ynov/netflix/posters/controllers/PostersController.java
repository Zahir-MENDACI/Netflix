package com.ynov.netflix.posters.controllers;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ynov.netflix.posters.daos.IPostersDao;
import com.ynov.netflix.posters.models.Poster;

@RestController
public class PostersController {

    @Autowired
    IPostersDao posterDao;

    @GetMapping("/posters")
    public List<Poster> getAllPoster() {

        return posterDao.findAll();
    }

    @GetMapping("/posters/{idPoster}")
    public Optional<Poster> getOnePoster(@PathVariable String idPoster) {
        return posterDao.findById(idPoster);
    }

    @GetMapping("/postersByIdContent/{idContent}")
    public  Map<String, String> getOnePosterById(@PathVariable String idContent) {

        Poster poster = posterDao.findByIdContent(idContent);
        HashMap<String, String> map = new HashMap<>();
        map.put("id", poster.getId());
        map.put("idContent", poster.getIdContent());
        if (new Date().getHours() > 12){
            map.put("url", poster.getUrlEvening());
        } else {
            map.put("url", poster.getUrlMorning());
        }
        return map;
    }

    @PostMapping("/posters")
    public Poster addPoster(@RequestBody Poster poster) {
        Poster posterAdded = posterDao.save(poster);
        return posterAdded;
    }

    @PutMapping("/posters/{idPoster}")
    public Poster addPoster(@PathVariable String idPoster, @RequestBody Poster poster) {
        Poster posterUpdated = posterDao.save(poster);
        return posterUpdated;
    }

    @DeleteMapping("/posters/{idPoster}")
    public boolean deletePoster(@PathVariable String idPoster) {
        posterDao.deleteById(idPoster);
        Optional<Poster> poster = posterDao.findById(idPoster);
        return poster.isEmpty();
    }
}
