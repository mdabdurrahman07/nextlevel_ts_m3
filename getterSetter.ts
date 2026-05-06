// Getter & Setter

class bankAccount {
  // we made this readonly because no one should modify others userID
  readonly userId: number;
  userName: string;
  //!   here we made this userBalance private now its not accessible out side this class and this class child property

  //   private userBalance: number;

  // ? if we want to use it in this class and as well as its child property but not outside and safe option is protected keyword

  protected userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }

  //   addBalance(balance: number) {
  //     this.userBalance = this.userBalance + balance;
  //   }

  // setter add balance
  set addBalance(amount: number) {
    //? here we just updating a value not getting anything so no "RETURN"
    this.userBalance = this.userBalance + amount;
  }

  //   get balance
  //   getBalance() {
  //     return this.userBalance;
  //   }

  //  getter to get method

  get getBalance() {
    return this.userBalance;
  }
}

const myAccount = new bankAccount(1017373, "Jamil", 250000);

// add money

// myAccount.addBalance(1000);
// myAccount.addBalance(1001);

// console.log(myAccount.getBalance());

myAccount.addBalance = 100
myAccount.addBalance = 200
console.log(myAccount.getBalance)
