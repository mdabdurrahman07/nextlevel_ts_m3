// access >> modify

class bankAccount {
    // we made this readonly because no one should modify others userID
 readonly userId: number;
  userName: string;
  userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }
}

const myAccount = new bankAccount(1017373, "Jamil", 250000);

// ! Cannot assign to 'userId' because it is a read-only property.
// ! myAccount.userId = 100000


