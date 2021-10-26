package com.shop.vvudongsan.mn00;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

@RestController
public class TestController {

    @ResponseBody
    @RequestMapping(path = "/test", method = {RequestMethod.GET})
    public ArrayList test(){
        ArrayList<Object> resList = new ArrayList<>();
        HashMap<String, String> map = new HashMap<String, String>();
        map.put("title"  ,"Sinrim station 30 meters away");
        map.put("image"  ,"https://codingapple1.github.io/vue/room0.jpg");
        map.put("content","18년 신축공사한 남향 원룸 ☀️, 공기청정기 제공");
        map.put("price"  ,"34만부터~");
        resList.add(map);
        map = new HashMap<String, String>();
        map.put("title"  ,"Changdong Aurora Bedroom(Queen-size)");
        map.put("image"  ,"https://codingapple1.github.io/vue/room1.jpg");
        map.put("content","침실만 따로 있는 공용 셰어하우스입니다. 최대 2인 가능");
        map.put("price"  ,"45만부터~");
        resList.add(map);
        map = new HashMap<String, String>();
        map.put("title"  ,"Geumsan Apartment Flat");
        map.put("image"  ,"https://codingapple1.github.io/vue/room2.jpg");
        map.put("content","금산오거리 역세권 아파트입니다. 애완동물 불가능 🐶");
        map.put("price"  ,"78만부터~");
        resList.add(map);
        map = new HashMap<String, String>();
        map.put("title"  ,"Double styled beds Studio Apt");
        map.put("image"  ,"https://codingapple1.github.io/vue/room3.jpg");
        map.put("content","무암동인근 2인용 원룸입니다. 전세 전환가능");
        map.put("price"  ,"55만부터~");
        resList.add(map);
        map = new HashMap<String, String>();
        map.put("title"  ,"MyeongIl Apartment flat");
        map.put("image"  ,"https://codingapple1.github.io/vue/room4.jpg");
        map.put("content","탄천동 아파트 월세, 남향, 역 5분거리, 허위매물아님");
        map.put("price"  ,"68만부터~");
        resList.add(map);
        map = new HashMap<String, String>();
        map.put("title"  ,"Banziha One Room");
        map.put("image"  ,"https://codingapple1.github.io/vue/room5.jpg");
        map.put("content","반지하 원룸입니다. 비올 때 물가끔 새는거 빼면 좋아요");
        map.put("price"  ,"37만부터~");
        resList.add(map);
        return resList;
    }
}
