function buildTower (n) {
    let tower = []
    let floor = "  *  "
    for (i = 0; i < n; i++) {
        tower.push(floor)
        floor = floor.trimEnd() + "**  "
        
        
    }
    console.log(tower)
}

buildTower(3)