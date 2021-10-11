# 통계 페이지 성능 최적화 실습

## Lighthouse (개선 전)

 <img src="https://images.velog.io/images/hyunjoong/post/be7d100a-3dd4-4c22-b997-6b326cec00d2/image.png" width="70%" height="70%">

<br>
<br>
<br>


## ✅ 개선 작업 목록

### 로딩성능 최적화

1. 컴포넌트 Lazy Loading (Code Splitting)
2. 컴포넌트 Preloading
3. 이미지 Preloading

### 렌더링 성능 최적화

1. 애니매이션 최적화 (Reflow, Repaing)

<br>
<br>

### Step1. 애니매이션 최적화

width로 애니메이션 되는 효과를 transfrom으로 변경해서 버벅이는 애니매이션을 부드럽게 개선

<br>
<br>
<br>
 
### Step1. 컴포넌트 Lazy Loading (Code Splitting)

컴포넌트 lazyload 적용

step2 적용 후 Lighthouse

  <img src="https://images.velog.io/images/hyunjoong/post/b3a7952b-2b56-4690-bd44-5ecc7356a2c2/image.png" width="70%" height="70%">
