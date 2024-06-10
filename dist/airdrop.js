"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const web3_js_1 = require("@solana/web3.js");
// Importiamo la chiave privata del nostro wallet che abbiamo salvato dopo aver eseguito il comando "yarn keygen"
const wallet_json_1 = __importDefault(require("./wallet.json"));
// Creiamo una nuova istanza di Keypair passando la chiave privata del nostro wallet come argomento
const keypair = web3_js_1.Keypair.fromSecretKey(new Uint8Array(wallet_json_1.default));
// Creiamo una nuova connessione con il cluster di devnet di Solana
const connection = new web3_js_1.Connection("https://api.devnet.solana.com", "finalized");
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // åRichiediamo un airdrop di 2 SOL al nostro wallet utilizzando il metodo requestAirdrop
        const airdropSignature = yield connection.requestAirdrop(keypair.publicKey, // Indirizzo del wallet a cui inviare i fondi
        2 * web3_js_1.LAMPORTS_PER_SOL // Quantità di SOL richiesta (1 SOL = 1_000_000_000 LAMPORTS)
        );
        // Attendiamo la conferma della transazione e poi logghiamo il link alla transazione sull'explorer di Solana
        console.log(`Success! Check out your TX here: https://explorer.solana.com/tx/${airdropSignature}?cluster=devnet`);
    }
    catch (error) {
        console.error(error);
    }
}))();
