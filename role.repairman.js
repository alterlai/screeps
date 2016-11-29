var repairMan = {

	/* Find a list of broken structures that need repairing and return one of them 
	* @param	creep 					current creep that's selected.
	* @return	int damagedStructures	Return one damaged structure's ID;
	*/

	findBrokenStructure: function(creep)
	{
		// Alle damaged structures
		var damagedStructures = creep.room.find(FIND_STRUCTURES, {
			filter: (structure) => {
				return (structure.hits != structure.hitsMax);
			}
		}); 

		return damagedStructures[0];
	},

	run: function(creep)
	{
		// If the creep is not repairing, assign a building
		if (!creep.memory.repairing && (creep.carry.energy == creep.carryCapacity))
		{
			var damagedStructure = repairMan.findBrokenStructure(creep)
			// If there are damaged buildings
			if (damagedStructure)
			{
				creep.memory.reparingBuilding = damagedStructure;
				creep.memory.repairing = true;
			}
		}
		// If it has an assigned building to repair and is carrying energy.
		else if (creep.memory.repairing && (creep.carry.energy == creep.carryCapacity))
		{
			if (creep.repair(creep.memory.reparingBuilding) == ERR_NOT_IN_RANGE)
			{
				creep.moveTo(creep.memory.reparingBuilding);
			}
			else
			{
				// Creep is finished repairing the structure
				if (creep.memory.repairingBuilding.hits == creep.memoyr.repairingBuilding.hitsMax)
				{
					creep.memory.repairing = false;
				} 
			}
		}
		// Otherwise start mining.
		else 
		{
			var sourcesRoomIndex = creep.memory.resourceRoomIndex;   
            var sources = creep.room.find(FIND_SOURCES);

            movement_code = creep.moveTo(sources[sourcesRoomIndex]);

            if (movement_code == ERR_NOT_IN_RANGE)
            {
                console.log(creep.name + ": Moving to target");
            }
            else if (movement_code == ERR_NO_PATH)
            {
                creep.memory.resourceRoomIndex++;
                console.log(creep.name + ": No path to source. Checking next source.");
            } 
            else if (movement_code == 0)
            {
                creep.harvest(sources[sourcesRoomIndex]);
            }
		}
	}
}

module.exports = repairMan;