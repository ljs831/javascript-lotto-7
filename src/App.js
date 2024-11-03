import Lotto from "./Lotto.js";
import IOHandler from "./IOHandler.js";
import { Console, Random } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.Lotto;
    this.IOHandler = new IOHandler();
  }
  async run() {
    const purchaseAmount = await this.IOHandler.getPurchaseAmount();
    Console.print(purchaseAmount);
    // const lottoNumbers = await this.IOHandler.getInput(INPUT_MESSAGE.GET_LOTTO_NUMBER);
    // Console.print(lottoNumbers);
    // const bonusNumber = await this.IOHandler.getInput(INPUT_MESSAGE.GET_BONUS_NUMBER);
    // Console.print(bonusNumber);
    // this.Lotto = new Lotto(lottoNumbers);
    // this.Lotto.start();
  }
}

export default App;
