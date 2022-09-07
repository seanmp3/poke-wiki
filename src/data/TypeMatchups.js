const typeMatchups = [
  {
    "type": "Normal",
    "no-effect": ["Ghost"],
    "weak-towards": ["Rock","Steel"],
    "strong-towards": []
  },
  {
    "type": "Fire",
    "no-effect": [],
    "weak-towards": ["Fire","Water","Rock","Dragon"],
    "strong-towards": ["Grass","Ice","Bug","Steel"]
  },
  {
    "type": "Water",
    "no-effect": [],
    "weak-towards": ["Water","Grass","Dragon"],
    "strong-towards": ["Fire","Ground","Rock"]
  },
  {
    "type": "Electric",
    "no-effect": ["Ground"],
    "weak-towards": ["Electric","Grass","Dragon"],
    "strong-towards": ["Water","Flying"]
  },
  {
    "type": "Grass",
    "no-effect": [],
    "weak-towards": ["Fire","Grass","Poison","Flying","Bug","Dragon","Steel"],
    "strong-towards": ["Water","Ground","Rock"]
  },
  {
    "type": "Ice",
    "no-effect": [],
    "weak-towards": ["Fire","Water","Ice","Steel"],
    "strong-towards": ["Grass","Ground","Flying","Dragon"]
  },
  {
    "type": "Fighting",
    "no-effect": ["Ghost"],
    "weak-towards": ["Poison","Flying","Psychic","Bug","Fairy"],
    "strong-towards": ["Normal","Ice","Rock","Dark","Steel"]
  },
  {
    "type": "Poison",
    "no-effect": ["Steel"],
    "weak-towards": ["Poison","Ground","Rock","Ghost"],
    "strong-towards": ["Grass","Fairy"]
  },
  {
    "type": "Ground",
    "no-effect": ["Flying"],
    "weak-towards": ["Grass","Bug"],
    "strong-towards": ["Fire","Electric","Poison","Rock","Steel"]
  },
  {
    "type": "Flying",
    "no-effect": [],
    "weak-towards": ["Electric","Rock","Steel"],
    "strong-towards": ["Grass","Fighting","Bug"]
  },
  {
    "type": "Psychic",
    "no-effect": ["Dark"],
    "weak-towards": ["Psychic","Steel"],
    "strong-towards": ["Fighting","Poison"]
  },
  {
    "type": "Bug",
    "no-effect": [],
    "weak-towards": ["Fire","Fighting","Poison","Flying","Ghost","Steel","Fairy"],
    "strong-towards": ["Grass","Psychic","Dark"]
  },
  {
    "type": "Rock",
    "no-effect": [],
    "weak-towards": ["Fighting","Ground","Steel"],
    "strong-towards": ["Fire","Ice","Flying","Bug"]
  },
  {
    "type": "Ghost",
    "no-effect": ["Normal"],
    "weak-towards": ["Dark"],
    "strong-towards": ["Psychic","Ghost"]
  },
  {
    "type": "Dragon",
    "no-effect": ["Fairy"],
    "weak-towards": ["Steel"],
    "strong-towards": ["Dragon"]
  },
  {
    "type": "Dark",
    "no-effect": [],
    "weak-towards": ["Fighting","Dark","Fairy"],
    "strong-towards": ["Psychic","Ghost"]
  },
  {
    "type": "Steel",
    "no-effect": [],
    "weak-towards": ["Fire","Water","Electric","Steel"],
    "strong-towards": ["Ice","Rock","Fairy"]
  },
  {
    "type": "Fairy",
    "no-effect": [],
    "weak-towards": ["Fire","Poison","Steel"],
    "strong-towards": ["Fighting","Dragon","Dark"]
  }
]

export default typeMatchups
