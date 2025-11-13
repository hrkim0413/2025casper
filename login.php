<!-- 헤더 연결 -->
<?php 
  include('./sub/header.php');
?>

<main id="login-page">
  <form name="로그인" method="post" action="./php/login_check.php">
    <fieldset>
      <legend>로그인</legend>
      <p>
        <label for="id_txt"></label>
        <input type="text" name="id_txt" id="id_txt" placeholder="아이디를 입력해주세요">
      </p>
      <p>
        <label for="pw_txt"></label>
        <input type="password" name="pw_txt" id="pw_txt" placeholder="패스워드를 입력해주세요">
      </p>
      <p>
        <input type="checkbox" name="id_save" id="id_save">
        <label for="id_save">아이디 저장</label>
      </p>
      <p>
        <input type="submit" value="로그인" id="login_btn">
      </p>
      <p>
        <a href="#" title="아이디 찾기">아이디 찾기</a>
        <a href="#" title="비밀번호 찾기">비밀번호 찾기</a>
        <a href="./php/register.php" title="회원가입">회원가입</a>
      </p>
    </fieldset>
  </form>
</main>

<!-- 푸터 연결 -->
<?php 
  include('./sub/footer.php');
?>

<script>
  $(document).ready(function(){
    // 1. 쿠키이름 저장
    let key = $.cookie('idChk');

    // 2. 만약에 브라우저에 key변수값이 저장되어 있다면(쿠키가 있다면)
    if(key){
      $('#id_txt').val(key); // id가 id박스 안에 표시되어야
      $('#id_save').prop('checked', true); // 체크박스에 체크가 되어있음
    }

    // 3. 체크박스를 체크하지 않고 다시 체크를 풀 경우(쿠키 저장하지 않겠다/삭제)
    $('#id_save').change(function(){
      if($(this).is(':checked')) { // 체크를 한 경우
        // 쿠키 생성
        $.cookie('idChk', $('#id_txt').val(), {expires: 7, path: '/'});
      } else { // 체크를 하지 않은 경우
        // 쿠키를 생성하지 않음
        $.removeCookie('idChk', {path: '/'});
      }
    })

    // 4. 아이디 입력시 쿠키 생성
    $('#id_txt').keyup(function(){ 
      if($('#id_save').is(':checked')) {
        $.cookie('idChk', $(this).val(), {expires: 7, path: '/'});
      }
    })
  })
</script>