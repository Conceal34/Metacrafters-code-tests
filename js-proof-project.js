/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
var nfts = [];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, eye_color, skin_color) {
    nfts.push(
        {
        Name: name,
        EyeColor: eye_color,
        SkinColor: skin_color
        }
    );
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i = 0; i < nfts.length ; i++){
        let tempNFT = nfts[i];
        console.log(tempNFT.Name, tempNFT.EyeColor, tempNFT.SkinColor);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log('total nfts = ' + nfts.length);
}

// call your functions below this line

mintNFT('vinner', 'brown', 'yellow');
mintNFT('deepak', 'brown', 'black');
mintNFT('Nigam', 'brown', 'white');



listNFTs();

getTotalSupply();
