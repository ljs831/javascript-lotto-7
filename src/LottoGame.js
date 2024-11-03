import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class LottoGame {
  #winningNumbers;
  #lottoAmount;
  #lottoArr;
  constructor(lottoAmount) {
    this.#lottoAmount = lottoAmount;
    this.#lottoArr = [];
  }

  // lottoAmount 만큼 로또 객체 생성하기
  CreateLotto() {
    Console.print(`\n${this.#lottoAmount}개를 구매했습니다.`);
    for (let i = 0; i < this.#lottoAmount; i++) {
      const lottoNum = this.CreateLottoNumbers();
      const lotto = new Lotto(lottoNum);
      Console.print(lottoNum);
      this.#lottoArr.push(lotto);
    }
  }

  // lotto 숫자 랜덤 생성 메소드
  CreateLottoNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }
}

export default LottoGame;
