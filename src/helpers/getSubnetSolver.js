const getIpClass = ({ firstOctet }) => {
    if ( firstOctet >= 1 && firstOctet <= 126 )
        return "A";
    else if ( firstOctet >= 128 && firstOctet <= 191 )
        return "B";
    else if ( firstOctet >= 192 && firstOctet <= 223 )
        return "C"
};

const getDefaultSubnetMask = ({ ipClass }) => {
    if ( ipClass === "A" )
        return "8"
    else if ( ipClass === "B" )
        return "16"
    else if ( ipClass === "C" )
        return "24"
};

const getPrefixSubnetMask = ({ subnetMaskBinary, subnetMaskDecimal }) => {
    if ( subnetMaskBinary !== 'undefined' ) {
        for ( let i = 0; i < 32; i++) {
            if ( subnetMaskBinary )
        }
    }
};

const getDecimalSubnetMask = () => {

};

const getBinarySubnetMask = ({ subnetMask }) => {
    let binarySubnetMask = "";
    for ( let i = 0; i < 32; i++ ) {
        if ( i % 8 === 0 && i != 0 ) {
            binarySubnetMask += ".";
        }
        if ( i < subnetMask )
            binarySubnetMask += "1";
        else
            binarySubnetMask += "0";
    }
    return binarySubnetMask;
}

const getBinaryIpAdress = ({ firstOctet, secondOctet, thirdOctet, fourthOctet }) => {
    const decToBin = ( decimal ) => ("00000000" + ( decimal >>> 0 ).toString( 2 ) ).substr( -8 );
    return `${ decToBin( firstOctet ) }.${ decToBin( secondOctet ) }.${ decToBin( thirdOctet ) }.${ decToBin( fourthOctet ) }`;
};

const getDecimalIpAdress = ({ firstOctet, secondOctet, thirdOctet, fourthOctet }) => {
    return `${ firstOctet }.${ secondOctet }.${ thirdOctet }.${ fourthOctet }`;
};

const separateIpAdress = ( ipAdress ) => {
    const separateIp = ipAdress.split( "." );
    const separateSubnetMask = separateIp[ 3 ].split( "/" );
    return {
        firstOctet:  separateIp[ 0 ],
        secondOctet: separateIp[ 1 ],
        thirdOctet:  separateIp[ 2 ],
        fourthOctet: separateSubnetMask[ 0 ],
        subnetMask:  ( separateSubnetMask[ 1 ] === 'undefined' ) ? "" : separateSubnetMask[ 1 ],
    };
};


const getAllCalcs = ( allFields ) => {
    // Get ip adress separated by octets
    if ( allFields.ip !== 'undefined' ) {
        const ipAdress = separateIp( allFields.ip );
        // Get only ip adress in decimal
        const ipAdressDecimal = getDecimalIpAdress( ipAdress );
        // Get only ip adress in binary
        const ipAdressBinary = getBinaryIpAdress( ipAdress );
        // Get ip class
        const ipClass = getIpClass( ipAdress );
        // Get Host bits
        const ipHostBits = 
    }
    // Get class Of ip

    
}

allFields = {
    ip: "192.168.73.1/24",
    ipAdress: {},
    ipAdressDecimal: "",
    ipAdressBinary: "",
    ipClass: "",
    ipHostBits: "",
    ipNetworkBits: "",
    ipDirectionType: "Host or Network",
    ipBroadCast: "",

    subnetMask: {
        defaultSubnetMask: "",
        subnetMaskPrefix: "",
        subnetMaskDecimal: "",
        subnetMaskBinary: "",
    },
}
