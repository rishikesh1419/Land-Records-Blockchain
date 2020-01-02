# Land-Records-Blockchain

An ethereum based private network and web app for buying and selling of lands.

## Installation steps

1. Open terminal and set the path to land-records folder
```
geth --datadir ./node1 --networkid 2018 --port 30306 --nodiscover --rpc --rpcapi "db,personal,eth,net,web3,debug" --rpccorsdomain="*" --rpcaddr="localhost" --rpcport 8545 --ws --wsapi "db,personal,eth,net,web3,debug" --wsorigins="*"  --wsaddr="localhost" --wsport 8546 console
```
2. Start the miner
```
miner.start(1)
```
3. Open new terminal and run the following command after setting the path to land-records-app
```
npm run dev
```
4. The app runs on the following link
```
localhost:3000/login
```


## Screenshots
1. Soldity remix- Set environment to the web3 provider

![sol1](images/sol1.png)

2. Solidity remix - Contract and its transactions

![sol2](images/sol2.png)

3. Land contract and its functions

![land](images/land.png)

4. Terminal - mining a transaction

![mine](images/mining.png)

5. Home page

![home](images/home.png)

6. Put land for sale

![home](images/putforsale.png)

7. Buy land

![buy](images/buy.png)

8. Get buyers

![approve](images/approve.png)
