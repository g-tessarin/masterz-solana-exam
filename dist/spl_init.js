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
const spl_token_1 = require("@solana/spl-token");
const wallet_json_1 = __importDefault(require("./wallet.json"));
const keypair = web3_js_1.Keypair.fromSecretKey(new Uint8Array(wallet_json_1.default));
const connection = new web3_js_1.Connection("https://api.devnet.solana.com", "confirmed");
(() => __awaiter(void 0, void 0, void 0, function* () {
    const mint = yield (0, spl_token_1.createMint)(connection, keypair, keypair.publicKey, null, 6);
    console.log("Mint Address:", mint.toBase58());
}))();
