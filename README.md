# 통계 사이트 성능 최적화 실습

## Lighthouse (개선 전)

 <img src="https://images.velog.io/images/hyunjoong/post/be7d100a-3dd4-4c22-b997-6b326cec00d2/image.png" width="70%" height="70%">

<br>
<br>
<br>

## ✅ 개선 작업 목록

### 로딩성능 최적화

1. 컴포넌트 Lazy Loading

: bundle analyzer을 이용해서 당장 불 필요하게 load되는 모달 관련된 코드들을 확인하였고 코드를 분할 하였습니다.

2. 컴포넌트 Preloading

3. 이미지 Preloading

### 렌더링 성능 최적화

1. 애니매이션 최적화 (Reflow, Repaing)

<br>

### Step1. 애니매이션 최적화

width로 애니메이션 되는 효과를 transfrom으로 변경해서 버벅이는 애니매이션을 부드럽게 개선

<br>
<br>
<br>
 
### Step2. 컴포넌트 Lazy Loading (Code Splitting)

모달 코드를 따로 분리하고 필요할 때 로딩하게 구현

step2 적용 후 Lighthouse

  <img src="https://images.velog.io/images/hyunjoong/post/b3a7952b-2b56-4690-bd44-5ecc7356a2c2/image.png" width="70%" height="70%">

<br>
<br>
<br>

Lazy Loading으로 최초페이지 띄우는 데에는 성능이 빨라졌지만 모달을 띄울떄에는 성능이 더 느려진 현상을 해결하기 위해서 Preloading 방식 사용

Preload 타이밍

- 1.  버튼 위에 마우스를 올려 놨을 때
- 2.  최초페이지가 로드가 되고, 모든 컴포넌트의 마운트가 끝났을 때

### Step3. Preloading

<br>

#### 3-1 컴포넌트 Preload

<img src="https://images.velog.io/images/hyunjoong/post/ff09acc0-3dc0-409d-8edc-0129d28686de/image.png" width="70%" height="70%">

#### 3-2 이미지 Preload

<img src="https://images.velog.io/images/hyunjoong/post/f43f8fef-edc4-4645-b747-6ec90bdb3328/image.png" width="70%" height="70%">
