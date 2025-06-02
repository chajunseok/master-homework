/**
 * 과제 파일
 */

// 과제 1번. 의도적인 데드락 코드

class Person {
    constructor(name) {
      this.name = name;
      this.hasContacted = false;
    }
  
    async waitForContact(otherPerson) {
      console.log(`${this.name}는 ${otherPerson.name}의 연락을 기다리고 있습니다.`);
      // (3) 비선점
      // 상대방에게 연락을 빼앗을 수 없음(자발적으로 연락을 기다림).
      // 다른 사람의 hasContacted가 true로 바뀔 때까지 무한히 대기.
      while (!otherPerson.hasContacted) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // 1초 대기
      }
      console.log(`${this.name}가 ${otherPerson.name}의 연락을 받았습니다!`);
    }
  
    // 상호 배제 & 점유와 대기
    async tryToContact(otherPerson) {
      console.log(`${this.name}가 ${otherPerson.name}에게 연락을 시도하려고 합니다.`);
      // (1) 상호 배제
      // 둘 다 동시에 연락하지 못하도록 자기 연락 완료 여부(hasContacted)를 따로 관리
      // (2) 점유와 대기
      // 다른 사람이 연락 오기를 기다리는 동안, 이미 연락하려고 시도 중이므로 대기 상태
      await this.waitForContact(otherPerson);
      this.hasContacted = true;
    }
  }
  
  const personA = new Person("PersonA");
  const personB = new Person("PersonB");
  
  // (4) 순환 대기
  // personA는 personB의 연락을 기다리고 있고,
  // personB는 personA의 연락을 기다리고 있다.
  // 둘 다 서로의 연락을 기다리며 루프가 발생.
  personA.tryToContact(personB);
  personB.tryToContact(personA);

  // 이거 맞나요?
  