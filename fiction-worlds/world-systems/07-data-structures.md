# 数据结构定义

**文档版本**: 1.0
**核心设计理念**: 万物皆对象，万物有数值，万物可演化

---

## 概述

本文档定义了九州仙途世界中所有核心对象的JSON Schema，为AI提供标准化的数据结构参考。

---

## 一、角色数据结构

### 1.1 玩家角色

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "PlayerCharacter",
  "type": "object",
  "required": ["id", "name", "attributes", "realm", "location"],
  "properties": {
    "id": {
      "type": "string",
      "description": "角色唯一标识"
    },
    "name": {
      "type": "string",
      "description": "角色名称"
    },
    "gender": {
      "type": "string",
      "enum": ["male", "female", "other"]
    },
    "age": {
      "type": "integer",
      "minimum": 0
    },
    "background": {
      "type": "string",
      "description": "角色背景故事"
    },
    "attributes": {
      "type": "object",
      "properties": {
        "rootBone": {
          "type": "integer",
          "minimum": 1,
          "maximum": 25,
          "description": "根骨"
        },
        "comprehension": {
          "type": "integer",
          "minimum": 1,
          "maximum": 25,
          "description": "悟性"
        },
        "constitution": {
          "type": "integer",
          "minimum": 1,
          "maximum": 25,
          "description": "体质"
        },
        "spiritSense": {
          "type": "integer",
          "minimum": 1,
          "maximum": 25,
          "description": "神识"
        },
        "fortune": {
          "type": "integer",
          "minimum": 1,
          "maximum": 100,
          "description": "气运"
        }
      }
    },
    "secondaryAttributes": {
      "type": "object",
      "properties": {
        "lifespan": {
          "type": "object",
          "properties": {
            "current": {"type": "integer"},
            "max": {"type": "integer"}
          }
        },
        "spiritPower": {
          "type": "object",
          "properties": {
            "current": {"type": "integer"},
            "max": {"type": "integer"}
          }
        },
        "stamina": {
          "type": "object",
          "properties": {
            "current": {"type": "integer"},
            "max": {"type": "integer"}
          }
        },
        "heartDemon": {
          "type": "integer",
          "minimum": 0,
          "maximum": 100,
          "description": "心魔值"
        }
      }
    },
    "hiddenAttributes": {
      "type": "object",
      "properties": {
        "karma": {
          "type": "integer",
          "minimum": -100,
          "maximum": 100,
          "description": "因果值"
        },
        "heavenlyDaoFavor": {
          "type": "integer",
          "minimum": -100,
          "maximum": 100,
          "description": "天道好感"
        },
        "destiny": {
          "type": "string",
          "description": "命格"
        }
      }
    },
    "realm": {
      "type": "object",
      "properties": {
        "name": {"type": "string"},
        "stage": {"type": "string", "enum": ["early", "middle", "late", "peak"]},
        "progress": {"type": "integer", "minimum": 0}
      }
    },
    "techniques": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {"type": "string"},
          "name": {"type": "string"},
          "level": {"type": "integer"},
          "mastery": {"type": "integer"}
        }
      }
    },
    "skills": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {"type": "string"},
          "level": {"type": "integer", "minimum": 1, "maximum": 5}
        }
      }
    },
    "inventory": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "itemId": {"type": "string"},
          "quantity": {"type": "integer"}
        }
      }
    },
    "equipment": {
      "type": "object",
      "properties": {
        "mainWeapon": {"type": "string"},
        "subWeapon": {"type": "string"},
        "armor": {"type": "string"},
        "accessories": {
          "type": "array",
          "maxItems": 2
        },
        "artifacts": {
          "type": "array",
          "maxItems": 3
        }
      }
    },
    "location": {
      "type": "object",
      "properties": {
        "region": {"type": "string"},
        "area": {"type": "string"},
        "coordinates": {
          "type": "object",
          "properties": {
            "x": {"type": "number"},
            "y": {"type": "number"}
          }
        }
      }
    },
    "faction": {
      "type": "object",
      "properties": {
        "id": {"type": "string"},
        "name": {"type": "string"},
        "rank": {"type": "string"},
        "contribution": {"type": "integer"}
      }
    },
    "reputation": {
      "type": "integer",
      "minimum": 0,
      "description": "声望值"
    },
    "relationships": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "targetId": {"type": "string"},
          "targetName": {"type": "string"},
          "type": {"type": "string"},
          "value": {"type": "integer"}
        }
      }
    },
    "statusEffects": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {"type": "string"},
          "duration": {"type": "integer"},
          "effects": {"type": "object"}
        }
      }
    },
    "flags": {
      "type": "array",
      "items": {"type": "string"},
      "description": "剧情标记"
    }
  }
}
```

### 1.2 角色示例

```json
{
  "id": "player_001",
  "name": "李青云",
  "gender": "male",
  "age": 18,
  "background": "出身凡人家庭，因资质出众被青云宗选中",
  "attributes": {
    "rootBone": 14,
    "comprehension": 12,
    "constitution": 10,
    "spiritSense": 11,
    "fortune": 45
  },
  "secondaryAttributes": {
    "lifespan": {"current": 280, "max": 300},
    "spiritPower": {"current": 520, "max": 520},
    "stamina": {"current": 100, "max": 100},
    "heartDemon": 15
  },
  "hiddenAttributes": {
    "karma": 25,
    "heavenlyDaoFavor": 10,
    "destiny": null
  },
  "realm": {
    "name": "筑基期",
    "stage": "early",
    "progress": 150
  },
  "techniques": [
    {
      "id": "qingyun_jue",
      "name": "青云诀",
      "level": 4,
      "mastery": 3
    }
  ],
  "skills": [
    {"name": "剑术", "level": 3},
    {"name": "炼丹", "level": 1}
  ],
  "inventory": [
    {"itemId": "spirit_stone_lower", "quantity": 50},
    {"itemId": "healing_pill", "quantity": 3},
    {"itemId": "spirit_recovery_pill", "quantity": 5}
  ],
  "equipment": {
    "mainWeapon": "qingyun_sword",
    "subWeapon": null,
    "armor": "qingyun_robe",
    "accessories": ["storage_bag"],
    "artifacts": []
  },
  "location": {
    "region": "zhongzhou",
    "area": "qingyun_mountain",
    "coordinates": {"x": 120.5, "y": 35.2}
  },
  "faction": {
    "id": "qingyun_sect",
    "name": "青云宗",
    "rank": "outer_disciple",
    "contribution": 120
  },
  "reputation": 150,
  "relationships": [
    {
      "targetId": "qingyun_elder",
      "targetName": "青云子",
      "type": "faction_leader",
      "value": 10
    }
  ],
  "statusEffects": [],
  "flags": ["qingyun_disciple", "saved_villager"]
}
```

---

## 二、物品数据结构

### 2.1 物品基础

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Item",
  "type": "object",
  "required": ["id", "name", "type", "rarity"],
  "properties": {
    "id": {"type": "string"},
    "name": {"type": "string"},
    "type": {
      "type": "string",
      "enum": ["pill", "artifact", "material", "technique", "consumable", "misc"]
    },
    "rarity": {
      "type": "string",
      "enum": ["common", "uncommon", "rare", "epic", "legendary", "mythic"]
    },
    "level": {"type": "integer"},
    "description": {"type": "string"},
    "effects": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "type": {"type": "string"},
          "value": {"type": "number"},
          "duration": {"type": "integer"}
        }
      }
    },
    "requirements": {
      "type": "object",
      "properties": {
        "realm": {"type": "string"},
        "attributes": {"type": "object"}
      }
    },
    "value": {
      "type": "object",
      "properties": {
        "spiritStones": {"type": "integer"},
        "currency": {"type": "string"}
      }
    },
    "stackable": {"type": "boolean"},
    "maxStack": {"type": "integer"}
  }
}
```

### 2.2 丹药

```json
{
  "id": "foundation_pill",
  "name": "筑基丹",
  "type": "pill",
  "rarity": "rare",
  "level": 3,
  "description": "辅助筑基的珍贵丹药，可提升突破成功率",
  "effects": [
    {
      "type": "breakthrough_bonus",
      "value": 0.2,
      "duration": 0
    }
  ],
  "requirements": {
    "realm": "qi_refining_peak"
  },
  "value": {
    "spiritStones": 1000,
    "currency": "lower"
  },
  "stackable": true,
  "maxStack": 99
}
```

### 2.3 法宝

```json
{
  "id": "qingyun_sword",
  "name": "青云剑",
  "type": "artifact",
  "subType": "weapon",
  "rarity": "rare",
  "level": 3,
  "element": ["wood", "water"],
  "description": "青云宗外门弟子标配飞剑",
  "stats": {
    "attack": 100,
    "speed": 50,
    "range": 100
  },
  "effects": [
    {
      "name": "青云剑气",
      "type": "active",
      "cost": 50,
      "damage": 200,
      "cooldown": 10,
      "description": "释放一道青云剑气，造成伤害"
    },
    {
      "name": "御剑飞行",
      "type": "passive",
      "speed": 500,
      "description": "可御剑飞行"
    }
  ],
  "requirements": {
    "realm": "foundation",
    "spiritPower": 100
  },
  "durability": {
    "current": 100,
    "max": 100
  },
  "value": {
    "spiritStones": 5000,
    "currency": "lower"
  },
  "stackable": false
}
```

---

## 三、势力数据结构

### 3.1 势力定义

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Faction",
  "type": "object",
  "required": ["id", "name", "type", "level"],
  "properties": {
    "id": {"type": "string"},
    "name": {"type": "string"},
    "type": {
      "type": "string",
      "enum": ["sect", "family", "dynasty", "guild", "alliance"]
    },
    "level": {"type": "integer", "minimum": 1, "maximum": 6},
    "score": {"type": "integer"},
    "leader": {
      "type": "object",
      "properties": {
        "name": {"type": "string"},
        "realm": {"type": "string"},
        "age": {"type": "integer"}
      }
    },
    "members": {
      "type": "object",
      "properties": {
        "total": {"type": "integer"},
        "elders": {"type": "integer"},
        "coreDisciples": {"type": "integer"},
        "innerDisciples": {"type": "integer"},
        "outerDisciples": {"type": "integer"}
      }
    },
    "resources": {
      "type": "object",
      "properties": {
        "spiritVein": {"type": "string"},
        "spiritStones": {"type": "integer"},
        "artifacts": {"type": "integer"},
        "techniques": {"type": "integer"}
      }
    },
    "territory": {
      "type": "object",
      "properties": {
        "region": {"type": "string"},
        "area": {"type": "integer"},
        "cities": {
          "type": "array",
          "items": {"type": "string"}
        }
      }
    },
    "relations": {
      "type": "object",
      "properties": {
        "allies": {
          "type": "array",
          "items": {"type": "string"}
        },
        "enemies": {
          "type": "array",
          "items": {"type": "string"}
        },
        "vassals": {
          "type": "array",
          "items": {"type": "string"}
        }
      }
    },
    "history": {
      "type": "object",
      "properties": {
        "founded": {"type": "integer"},
        "events": {
          "type": "array",
          "items": {"type": "string"}
        }
      }
    },
    "culture": {"type": "string"},
    "recruitment": {"type": "string"}
  }
}
```

---

## 四、区域数据结构

### 4.1 区域定义

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Region",
  "type": "object",
  "required": ["id", "name", "type"],
  "properties": {
    "id": {"type": "string"},
    "name": {"type": "string"},
    "type": {
      "type": "string",
      "enum": ["continent", "ocean", "special"]
    },
    "area": {"type": "integer", "description": "面积（平方公里）"},
    "spiritDensity": {
      "type": "object",
      "properties": {
        "base": {"type": "integer"},
        "min": {"type": "integer"},
        "max": {"type": "integer"},
        "distribution": {"type": "string"}
      }
    },
    "climate": {"type": "string"},
    "terrain": {
      "type": "array",
      "items": {"type": "string"}
    },
    "factions": {
      "type": "array",
      "items": {"type": "string"}
    },
    "dangerLevel": {"type": "integer", "minimum": 1, "maximum": 10},
    "population": {"type": "integer"},
    "cultivatorDensity": {"type": "number"},
    "resources": {
      "type": "object",
      "properties": {
        "spiritStones": {"type": "string"},
        "herbs": {"type": "string"},
        "minerals": {"type": "string"},
        "beasts": {"type": "string"}
      }
    },
    "specialLocations": {
      "type": "array",
      "items": {"type": "string"}
    }
  }
}
```

---

## 五、事件数据结构

### 5.1 事件定义

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Event",
  "type": "object",
  "required": ["id", "name", "type", "trigger"],
  "properties": {
    "id": {"type": "string"},
    "name": {"type": "string"},
    "type": {
      "type": "string",
      "enum": ["disaster", "conflict", "opportunity", "daily"]
    },
    "category": {"type": "string"},
    "trigger": {
      "type": "object",
      "properties": {
        "conditions": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "type": {"type": "string"},
              "value": {}
            }
          }
        }
      }
    },
    "description": {"type": "string"},
    "options": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {"type": "string"},
          "text": {"type": "string"},
          "requirements": {
            "type": "array",
            "items": {"type": "object"}
          },
          "outcomes": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "condition": {"type": "string"},
                "probability": {"type": "number"},
                "effects": {
                  "type": "array",
                  "items": {"type": "object"}
                }
              }
            }
          }
        }
      }
    },
    "consequences": {
      "type": "object",
      "properties": {
        "karma": {"type": "integer"},
        "reputation": {"type": "integer"},
        "relationships": {
          "type": "array",
          "items": {"type": "object"}
        }
      }
    }
  }
}
```

---

## 六、存档数据结构

### 6.1 存档格式

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "SaveData",
  "type": "object",
  "required": ["version", "world", "character", "time"],
  "properties": {
    "version": {"type": "string"},
    "world": {
      "type": "object",
      "properties": {
        "id": {"type": "string"},
        "name": {"type": "string"},
        "version": {"type": "string"}
      }
    },
    "character": {
      "type": "object",
      "description": "玩家角色完整数据"
    },
    "time": {
      "type": "object",
      "properties": {
        "year": {"type": "integer"},
        "month": {"type": "integer"},
        "day": {"type": "integer"},
        "hour": {"type": "integer"}
      }
    },
    "worldState": {
      "type": "object",
      "properties": {
        "factions": {"type": "object"},
        "regions": {"type": "object"},
        "events": {"type": "array"}
      }
    },
    "history": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "timestamp": {"type": "string"},
          "event": {"type": "string"},
          "description": {"type": "string"}
        }
      }
    },
    "metadata": {
      "type": "object",
      "properties": {
        "createdAt": {"type": "string"},
        "updatedAt": {"type": "string"},
        "playTime": {"type": "integer"}
      }
    }
  }
}
```

### 6.2 存档示例

```json
{
  "version": "1.0",
  "world": {
    "id": "eastern-fantasy",
    "name": "九州仙途",
    "version": "1.0"
  },
  "character": {
    "id": "player_001",
    "name": "李青云",
    "realm": {
      "name": "筑基期",
      "stage": "early",
      "progress": 150
    },
    "location": {
      "region": "zhongzhou",
      "area": "qingyun_mountain"
    }
  },
  "time": {
    "year": 30000,
    "month": 1,
    "day": 15,
    "hour": 7
  },
  "worldState": {
    "factions": {
      "qingyun_sect": {
        "relation": 25,
        "contribution": 120
      }
    },
    "events": []
  },
  "history": [
    {
      "timestamp": "30000-01-01",
      "event": "character_created",
      "description": "角色创建"
    },
    {
      "timestamp": "30000-01-10",
      "event": "joined_faction",
      "description": "加入青云宗"
    }
  ],
  "metadata": {
    "createdAt": "2026-03-27T00:00:00Z",
    "updatedAt": "2026-03-27T12:00:00Z",
    "playTime": 3600
  }
}
```

---

## 七、API数据结构

### 7.1 请求格式

```json
{
  "action": {
    "type": "string",
    "enum": ["move", "interact", "combat", "cultivate", "use_item", "talk", "trade"]
  },
  "target": {
    "type": "string",
    "id": "string"
  },
  "params": {
    "type": "object"
  }
}
```

### 7.2 响应格式

```json
{
  "success": {"type": "boolean"},
  "message": {"type": "string"},
  "data": {
    "type": "object"
  },
  "stateChanges": {
    "type": "array",
    "items": {
      "type": "object",
      "properties": {
        "path": {"type": "string"},
        "oldValue": {},
        "newValue": {}
      }
    }
  },
  "events": {
    "type": "array",
    "items": {"type": "object"}
  }
}
```

---

## 八、AI使用指南

### 8.1 数据读取

```
1. 识别数据类型
   └── 根据场景确定需要的数据结构

2. 加载数据
   └── 从存档或模板加载

3. 验证数据
   └── 检查必填字段和数值范围

4. 应用数据
   └── 在游戏中使用
```

### 8.2 数据更新

```
1. 记录变化
   └── 记录所有状态变化

2. 验证变化
   └── 检查变化是否合法

3. 应用变化
   └── 更新数据

4. 触发事件
   └── 检查是否触发新事件
```

### 8.3 数据持久化

```
1. 收集状态
   └── 收集所有需要保存的数据

2. 格式化数据
   └── 按照存档格式组织

3. 生成存档
   └── 生成JSON存档

4. 输出存档
   └── 输出给用户保存
```

---

**文档结束**
