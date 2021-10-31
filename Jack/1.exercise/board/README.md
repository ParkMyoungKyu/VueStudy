# 태그검색 게시판

### 결과물

![board.apng](board.apng)

### Key Point

1. 필터기능 사용
```javascript
this.boardList.filter(item => item.tag.indexOf(evt.target.value) > -1);
```

List내의 Object 컬럼 중 tag 데이터가 입력받은 값이 포함되어 있는 
Object만 필터되어 List로 반환한다.
