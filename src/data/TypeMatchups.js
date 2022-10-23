const typeMatchups = [
  {
    "id": "0",
    "type": "Normal",
    "noEffect": ["Ghost"],
    "weakTowards": ["Rock","Steel"],
    "strongTowards": []
  },
  {
    "id": "1",
    "type": "Fire",
    "noEffect": [],
    "weakTowards": ["Fire","Water","Rock","Dragon"],
    "strongTowards": ["Grass","Ice","Bug","Steel"]
  },
  {
    "id": "2",
    "type": "Water",
    "noEffect": [],
    "weakTowards": ["Water","Grass","Dragon"],
    "strongTowards": ["Fire","Ground","Rock"]
  },
  {
    "id": "3",
    "type": "Electric",
    "noEffect": ["Ground"],
    "weakTowards": ["Electric","Grass","Dragon"],
    "strongTowards": ["Water","Flying"]
  },
  {
    "id": "4",
    "type": "Grass",
    "noEffect": [],
    "weakTowards": ["Fire","Grass","Poison","Flying","Bug","Dragon","Steel"],
    "strongTowards": ["Water","Ground","Rock"]
  },
  {
    "id": "5",
    "type": "Ice",
    "noEffect": [],
    "weakTowards": ["Fire","Water","Ice","Steel"],
    "strongTowards": ["Grass","Ground","Flying","Dragon"]
  },
  {
    "id": "6",
    "type": "Fighting",
    "noEffect": ["Ghost"],
    "weakTowards": ["Poison","Flying","Psychic","Bug","Fairy"],
    "strongTowards": ["Normal","Ice","Rock","Dark","Steel"]
  },
  {
    "id": "7",
    "type": "Poison",
    "noEffect": ["Steel"],
    "weakTowards": ["Poison","Ground","Rock","Ghost"],
    "strongTowards": ["Grass","Fairy"]
  },
  {
    "id": "8",
    "type": "Ground",
    "noEffect": ["Flying"],
    "weakTowards": ["Grass","Bug"],
    "strongTowards": ["Fire","Electric","Poison","Rock","Steel"]
  },
  {
    "id": "9",
    "type": "Flying",
    "noEffect": [],
    "weakTowards": ["Electric","Rock","Steel"],
    "strongTowards": ["Grass","Fighting","Bug"]
  },
  {
    "id": "10",
    "type": "Psychic",
    "noEffect": ["Dark"],
    "weakTowards": ["Psychic","Steel"],
    "strongTowards": ["Fighting","Poison"]
  },
  {
    "id": "11",
    "type": "Bug",
    "noEffect": [],
    "weakTowards": ["Fire","Fighting","Poison","Flying","Ghost","Steel","Fairy"],
    "strongTowards": ["Grass","Psychic","Dark"]
  },
  {
    "id": "12",
    "type": "Rock",
    "noEffect": [],
    "weakTowards": ["Fighting","Ground","Steel"],
    "strongTowards": ["Fire","Ice","Flying","Bug"]
  },
  {
    "id": "13",
    "type": "Ghost",
    "noEffect": ["Normal"],
    "weakTowards": ["Dark"],
    "strongTowards": ["Psychic","Ghost"]
  },
  {
    "id": "14",
    "type": "Dragon",
    "noEffect": ["Fairy"],
    "weakTowards": ["Steel"],
    "strongTowards": ["Dragon"]
  },
  {
    "id": "15",
    "type": "Dark",
    "noEffect": [],
    "weakTowards": ["Fighting","Dark","Fairy"],
    "strongTowards": ["Psychic","Ghost"]
  },
  {
    "id": "16",
    "type": "Steel",
    "noEffect": [],
    "weakTowards": ["Fire","Water","Electric","Steel"],
    "strongTowards": ["Ice","Rock","Fairy"]
  },
  {
    "id": "17",
    "type": "Fairy",
    "noEffect": [],
    "weakTowards": ["Fire","Poison","Steel"],
    "strongTowards": ["Fighting","Dragon","Dark"]
  }
]

export default typeMatchups
