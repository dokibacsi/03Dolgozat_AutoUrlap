import { AUTOLITA } from "./adatok.js";
import AutoUrlap from "./AutoUrlap.js";

$(() => {
    const TAROLO = $(".ujadat");
    new AutoUrlap(AUTOLITA, TAROLO);
})