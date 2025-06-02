/**
 * 과제 파일
 */

// 과제 1-2번. 의도적인 데드락 코드 해결
// 데드락의 4대 조건 중에 1개만 깨보자


class Person {
    constructor(name) {
      this.name = name;
      this.hasContacted = false;
    }
  
    async waitForContact(otherPerson) {
      while (!otherPerson.hasContacted) {
        console.log(`${this.name}는 ${otherPerson.name}의 연락을 기다리는 중...`);
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
      console.log(`${this.name}가 ${otherPerson.name}의 연락을 받았습니다!`);
    }
  
    async tryToContact(otherPerson) {
      console.log(`${this.name}가 ${otherPerson.name}에게 연락을 시도하려고 합니다.`);
      await this.waitForContact(otherPerson);
      this.hasContacted = true;
    }
  }
  
  const personA = new Person("PersonA");
  const personB = new Person("PersonB");
  
  // 순환 대기를 깸 A 가 먼저 연락하도록 설정
  // 데드락 해소 방법: PersonA가 먼저 연락하도록 선제적으로 hasContacted 설정
  personA.hasContacted = true;
  
  // 둘 다 연락 시도
  personA.tryToContact(personB);
  personB.tryToContact(personA);
  