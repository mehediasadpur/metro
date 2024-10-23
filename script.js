// Fare matrix for Dhaka Metro (as an example, update with actual fare data)
const fareMatrix = [
    // Uttara North, Uttara Center, Uttara South, Pallabi, Mirpur-11, Mirpur-10, Kazipara, Shewrapara, Agargaon, Bijoy Sarani, Farmgate, Kawran Bazar, Shahbagh, Dhaka University, Bangladesh Secretariat, Motijheel
    [  0, 20, 20, 30, 30, 40, 40, 50, 60, 60, 70, 80, 80, 90, 90, 100], // Uttara North
    [20,  0, 20, 20, 30, 30, 40, 40, 50, 60, 60, 70, 80, 80, 90, 90],  // Uttara Center
    [20, 20,  0, 20, 20, 30, 30, 40, 50, 50, 60, 60, 70, 80, 80, 90],  // Uttara South
    [30, 20, 20,  0, 20, 20, 30, 30, 40, 50, 50, 60, 60, 70, 70, 80],  // Pallabi
    [30, 30, 20, 20,  0, 20, 20, 30, 40, 40, 50, 50, 60, 60, 70, 70],  // Mirpur-11
    [40, 30, 30, 20, 20,  0, 20, 20, 30, 40, 40, 50, 50, 60, 60, 70],  // Mirpur-10
    [40, 40, 30, 30, 20, 20,  0, 20, 30, 30, 40, 40, 50, 50, 60, 60],  // Kazipara
    [50, 40, 40, 30, 30, 20, 20,  0, 20, 30, 30, 40, 40, 50, 50, 60],  // Shewrapara
    [60, 50, 50, 40, 40, 30, 30, 20,  0, 20, 30, 30, 40, 40, 50, 50],  // Agargaon
    [60, 60, 50, 50, 40, 40, 30, 30, 20,  0, 20, 30, 30, 40, 40, 50],  // Bijoy Sarani
    [70, 60, 60, 50, 50, 40, 40, 30, 30, 20,  0, 20, 30, 30, 40, 40],  // Farmgate
    [80, 70, 60, 60, 50, 50, 40, 40, 30, 30, 20,  0, 20, 30, 30, 40],  // Kawran Bazar
    [80, 80, 70, 60, 60, 50, 50, 40, 40, 30, 30, 20,  0, 20, 30, 30],  // Shahbagh
    [90, 80, 80, 70, 60, 60, 50, 50, 40, 40, 30, 30, 20,  0, 20, 30],  // Dhaka University
    [90, 90, 80, 70, 70, 60, 60, 50, 50, 40, 40, 30, 30, 20,  0, 20],  // Bangladesh Secretariat
    [100, 90, 90, 80, 70, 70, 60, 60, 50, 50, 40, 40, 30, 30, 20,  0]  // Motijheel
];

// Function to calculate fare based on selected stations
function calculateFare() {
    const fromStation = document.getElementById("from-station").value;
    const toStation = document.getElementById("to-station").value;

    if (fromStation == 0 || toStation == 0) {
        document.getElementById("result").innerText = "Please select both stations.";
        return;
    }

    const fare = fareMatrix[fromStation - 1][toStation - 1];
    document.getElementById("result").innerText = `The fare from ${document.getElementById("from-station").options[fromStation].text} to ${document.getElementById("to-station").options[toStation].text} is Tk ${fare}.`;
}
