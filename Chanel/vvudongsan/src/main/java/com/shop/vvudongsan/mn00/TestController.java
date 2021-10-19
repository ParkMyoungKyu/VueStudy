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
        Map<String, Object> map = new HashMap<>();
        map.put("title"  ,"Sinrim station 30 meters away");
        map.put("image"  ,"https://codingapple1.github.io/vue/room0.jpg");
        map.put("content","18년 신축공사한 남향 원룸 ☀️, 공기청정기 제공");
        map.put("price"  ,"34만부터~");
        resList.add(map);
        map.put("title"  ,"Changdong Aurora Bedroom(Queen-size)");
        map.put("image"  ,"https://codingapple1.github.io/vue/room1.jpg");
        map.put("content","침실만 따로 있는 공용 셰어하우스입니다. 최대 2인 가능");
        map.put("price"  ,"45만부터~");
        resList.add(map);
        return resList;
    }
}
