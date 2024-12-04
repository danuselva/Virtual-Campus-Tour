var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance-",
      "name": "Entrance ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.510650303860195,
          "pitch": 0.2972064717821379,
          "rotation": 0.7853981633974483,
          "target": "1-ct-canteen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-ct-canteen",
      "name": "CT Canteen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8747614245282129,
          "pitch": 0.10157992131215643,
          "rotation": 0.7853981633974483,
          "target": "2-admin-block"
        },
        {
          "yaw": -1.4245315733765622,
          "pitch": 0.0920137733674391,
          "rotation": 0,
          "target": "3-way-to-circuit-block"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-admin-block",
      "name": "Admin Block",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.006722180606868022,
          "pitch": 0.17068898682848932,
          "rotation": 7.0685834705770345,
          "target": "29-ab-ground-floor"
        },
        {
          "yaw": -3.026603024524386,
          "pitch": 0.3250248919960814,
          "rotation": 0,
          "target": "1-ct-canteen"
        },
        {
          "yaw": 1.3288431104004097,
          "pitch": 0.18650080382108314,
          "rotation": 5.497787143782138,
          "target": "66-pathway-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-way-to-circuit-block",
      "name": "Way to circuit block",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0384941299431105,
          "pitch": 0.3268225171160921,
          "rotation": 0,
          "target": "4-circuit-block"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-circuit-block",
      "name": "Circuit Block",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.046957325854245724,
          "pitch": 0.31145313068298464,
          "rotation": 0,
          "target": "5-cb-ground-floor"
        },
        {
          "yaw": -1.5429152438255667,
          "pitch": 0.22462844491156275,
          "rotation": 0,
          "target": "28-way-to-admin-block"
        },
        {
          "yaw": 1.366659510060142,
          "pitch": 0.2787455511860806,
          "rotation": 6.283185307179586,
          "target": "48-pathway-circuit-block"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-cb-ground-floor",
      "name": "CB Ground Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.46850244943874486,
          "pitch": 0.14763785923602768,
          "rotation": 0.7853981633974483,
          "target": "6-cb-first-floor"
        },
        {
          "yaw": 2.931803769611153,
          "pitch": 0.23655798654906945,
          "rotation": 11.780972450961727,
          "target": "25-cb-badminton-court"
        },
        {
          "yaw": 0.11147160415219126,
          "pitch": 0.13960061550808334,
          "rotation": 0.7853981633974483,
          "target": "25-cb-badminton-court"
        },
        {
          "yaw": -1.4980508760210398,
          "pitch": 0.2960993573771695,
          "rotation": 0,
          "target": "4-circuit-block"
        },
        {
          "yaw": 2.5140463268226405,
          "pitch": 0.3430489982219651,
          "rotation": 5.497787143782138,
          "target": "6-cb-first-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-cb-first-floor",
      "name": "CB First Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7979067055139684,
          "pitch": 0.24895607917613205,
          "rotation": 12.566370614359176,
          "target": "7-cb-ai-department-corridor"
        },
        {
          "yaw": 1.4009338052075098,
          "pitch": 0.16330738390126598,
          "rotation": 7.0685834705770345,
          "target": "11-cb--eee-department-corridor"
        },
        {
          "yaw": -0.6061616571706452,
          "pitch": 0.42990638197696995,
          "rotation": 0,
          "target": "9-cb-second-floor"
        },
        {
          "yaw": -0.03508621969865544,
          "pitch": 0.45484905026938804,
          "rotation": 0,
          "target": "5-cb-ground-floor"
        },
        {
          "yaw": -1.1520672653368713,
          "pitch": 0.31690063182042927,
          "rotation": 0.7853981633974483,
          "target": "22-cb-eee-lab"
        },
        {
          "yaw": 1.1136915567182761,
          "pitch": 0.19066868943133386,
          "rotation": 5.497787143782138,
          "target": "5-cb-ground-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-cb-ai-department-corridor",
      "name": "CB AI Department Corridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.08011857645344378,
          "pitch": 0.5918087574660245,
          "rotation": 6.283185307179586,
          "target": "8-department-of-artificial-intelligence"
        },
        {
          "yaw": -1.330441891075706,
          "pitch": 0.3404910870296938,
          "rotation": 0,
          "target": "6-cb-first-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-department-of-artificial-intelligence",
      "name": "Department of Artificial Intelligence",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.1641703815709512,
          "pitch": 0.32233761702664054,
          "rotation": 6.283185307179586,
          "target": "7-cb-ai-department-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-cb-second-floor",
      "name": "CB Second Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0784426627148243,
          "pitch": 0.5276516467520285,
          "rotation": 0,
          "target": "10-ai-lab"
        },
        {
          "yaw": 1.654281098566452,
          "pitch": 0.2259639519697174,
          "rotation": 0,
          "target": "23-cb-placement-and-training-department-corridor"
        },
        {
          "yaw": -0.5874724009246108,
          "pitch": 0.4566564296004145,
          "rotation": 0,
          "target": "13-cb-third-floor"
        },
        {
          "yaw": 0.07278188196774416,
          "pitch": 0.5691101417330415,
          "rotation": 0,
          "target": "6-cb-first-floor"
        },
        {
          "yaw": 1.2982420385930045,
          "pitch": 0.18234775314299867,
          "rotation": 4.71238898038469,
          "target": "6-cb-first-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-ai-lab",
      "name": "AI Lab",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.0852416710250168,
          "pitch": 0.26267146344856585,
          "rotation": 5.497787143782138,
          "target": "9-cb-second-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-cb--eee-department-corridor",
      "name": "CB  EEE Department Corridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.8501379641288906,
          "pitch": 0.3647446634848599,
          "rotation": 0,
          "target": "12-department-of-eee"
        },
        {
          "yaw": 1.2707287247176087,
          "pitch": 0.32597535152479473,
          "rotation": 0.7853981633974483,
          "target": "6-cb-first-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-department-of-eee",
      "name": "Department of EEE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.0839365895591007,
          "pitch": 0.34476717668960255,
          "rotation": 0.7853981633974483,
          "target": "11-cb--eee-department-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-cb-third-floor",
      "name": "CB Third Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.1461409808235654,
          "pitch": 0.1742323384910094,
          "rotation": 12.566370614359176,
          "target": "14-cb-cse-department-corridor"
        },
        {
          "yaw": 1.5510677450421326,
          "pitch": 0.23073614347128846,
          "rotation": 7.0685834705770345,
          "target": "18-cb-fourth-floor"
        },
        {
          "yaw": 1.353418831884463,
          "pitch": 0.18085252251733763,
          "rotation": 1.5707963267948966,
          "target": "26-cb-cse-department-corridor"
        },
        {
          "yaw": 1.5918560404431412,
          "pitch": 0.37696352832240443,
          "rotation": 1.5707963267948966,
          "target": "9-cb-second-floor"
        },
        {
          "yaw": -1.8288664183598264,
          "pitch": 0.5120577240404565,
          "rotation": 4.71238898038469,
          "target": "9-cb-second-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-cb-cse-department-corridor",
      "name": "CB CSE Department Corridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.076470287638731,
          "pitch": 0.32506385863892007,
          "rotation": 0,
          "target": "15-department-of-cse-1"
        },
        {
          "yaw": -2.9497660142360083,
          "pitch": 0.409293826911842,
          "rotation": 0,
          "target": "26-cb-cse-department-corridor"
        },
        {
          "yaw": -1.4301934771056573,
          "pitch": 0.4103453772957675,
          "rotation": 0,
          "target": "13-cb-third-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-department-of-cse-1",
      "name": "Department of CSE 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7978717773322135,
          "pitch": 0.24867505295169678,
          "rotation": 6.283185307179586,
          "target": "14-cb-cse-department-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-cb-cse-labs-corridor",
      "name": "CB CSE Labs Corridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5028819549969903,
          "pitch": 0.3555495690761443,
          "rotation": 0,
          "target": "17-cb-cse-lab"
        },
        {
          "yaw": 0.17751248406676012,
          "pitch": 0.3739728931325441,
          "rotation": 0,
          "target": "14-cb-cse-department-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-cb-cse-lab",
      "name": "CB CSE Lab",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.9243365488903095,
          "pitch": 0.5158758781203883,
          "rotation": 10.995574287564278,
          "target": "16-cb-cse-labs-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-cb-fourth-floor",
      "name": "CB Fourth Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.3550286643819156,
          "pitch": 0.19536311243328974,
          "rotation": 0,
          "target": "19-cb-ece-department-corridor"
        },
        {
          "yaw": 1.8004450290038312,
          "pitch": 0.36840155865125546,
          "rotation": 0.7853981633974483,
          "target": "13-cb-third-floor"
        },
        {
          "yaw": -1.8033231008848034,
          "pitch": 0.5305552402423146,
          "rotation": 5.497787143782138,
          "target": "13-cb-third-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-cb-ece-department-corridor",
      "name": "CB ECE Department Corridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.2547751105515452,
          "pitch": 0.4732073884203132,
          "rotation": 5.497787143782138,
          "target": "20-department-of-ece-"
        },
        {
          "yaw": -1.7369995634058348,
          "pitch": 0.4395200355226123,
          "rotation": 0,
          "target": "18-cb-fourth-floor"
        },
        {
          "yaw": 0.28878397719257265,
          "pitch": 0.16958622313925353,
          "rotation": 5.497787143782138,
          "target": "21-cb-ece-lab"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-department-of-ece-",
      "name": "Department of ECE ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.30989498294497864,
          "pitch": 0.17399542272107382,
          "rotation": 0,
          "target": "19-cb-ece-department-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-cb-ece-lab",
      "name": "CB ECE lab",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.6040584892283913,
          "pitch": 0.42123113159733805,
          "rotation": 0,
          "target": "19-cb-ece-department-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-cb-eee-lab",
      "name": "CB EEE lab",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7405178879270835,
          "pitch": 0.12652835976238563,
          "rotation": 0,
          "target": "6-cb-first-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-cb-placement-and-training-department-corridor",
      "name": "CB Placement and Training Department Corridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.2395855661726856,
          "pitch": 0.36781937477798365,
          "rotation": 6.283185307179586,
          "target": "24-department-of-training-and-placement1"
        },
        {
          "yaw": -2.0007934350585064,
          "pitch": 0.3284014534736279,
          "rotation": 0.7853981633974483,
          "target": "9-cb-second-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-department-of-training-and-placement1",
      "name": "Department of training and placement1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.8467718735764098,
          "pitch": 0.3524584192612803,
          "rotation": 0,
          "target": "23-cb-placement-and-training-department-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-cb-badminton-court",
      "name": "CB Badminton court",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.1519443338929793,
          "pitch": 0.17967691960225274,
          "rotation": 0,
          "target": "5-cb-ground-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-cb-cse-department-corridor",
      "name": "CB CSE Department Corridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.14218513372454034,
          "pitch": 0.6077448069475562,
          "rotation": 0,
          "target": "27-department-of-cse-2"
        },
        {
          "yaw": -1.4389470589514808,
          "pitch": 0.3683268846223555,
          "rotation": 0,
          "target": "16-cb-cse-labs-corridor"
        },
        {
          "yaw": 1.5379191311836458,
          "pitch": 0.32945736477782006,
          "rotation": 0,
          "target": "13-cb-third-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-department-of-cse-2",
      "name": "Department of CSE 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.4119062226835055,
          "pitch": 0.26159117831891265,
          "rotation": 0,
          "target": "26-cb-cse-department-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-way-to-admin-block",
      "name": "Way to Admin Block",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.04846793778681402,
          "pitch": 0.15281163319835755,
          "rotation": 0,
          "target": "1-ct-canteen"
        },
        {
          "yaw": 3.0625047701064663,
          "pitch": 0.30915661197411914,
          "rotation": 0,
          "target": "4-circuit-block"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-ab-ground-floor",
      "name": "AB Ground Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.510775118107187,
          "pitch": 0.2650951158003796,
          "rotation": 0,
          "target": "30-mechanical-lab"
        },
        {
          "yaw": -2.175299197034059,
          "pitch": 0.36393619609713923,
          "rotation": 5.497787143782138,
          "target": "31-ab-first-floor-"
        },
        {
          "yaw": -1.5132519502723163,
          "pitch": 0.2914581324376364,
          "rotation": 0,
          "target": "2-admin-block"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-mechanical-lab",
      "name": "Mechanical Lab",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.18066378509594827,
          "pitch": 0.11308276952629015,
          "rotation": 0,
          "target": "29-ab-ground-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "31-ab-first-floor-",
      "name": "AB First Floor ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4104087701165913,
          "pitch": 0.26953928038889785,
          "rotation": 0,
          "target": "32-office"
        },
        {
          "yaw": 1.7252978142074715,
          "pitch": 0.26840421915591506,
          "rotation": 0,
          "target": "33-library"
        },
        {
          "yaw": -2.8168848130725817,
          "pitch": 0.4815623950236123,
          "rotation": 6.283185307179586,
          "target": "29-ab-ground-floor"
        },
        {
          "yaw": -2.1327008223489266,
          "pitch": 0.3528221953112336,
          "rotation": 5.497787143782138,
          "target": "35-ab-second-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "32-office",
      "name": "Office",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7670690835979803,
          "pitch": 0.32840518308458755,
          "rotation": 0.7853981633974483,
          "target": "31-ab-first-floor-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "33-library",
      "name": "Library",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0054848778923287,
          "pitch": 0.30164606117510395,
          "rotation": 0,
          "target": "34-library-1"
        },
        {
          "yaw": -2.1474344549634097,
          "pitch": 0.24243636501789823,
          "rotation": 0.7853981633974483,
          "target": "31-ab-first-floor-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "34-library-1",
      "name": "Library 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6644050581526066,
          "pitch": 0.5857145480160693,
          "rotation": 0,
          "target": "33-library"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "35-ab-second-floor",
      "name": "AB Second Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.09530161590888042,
          "pitch": 0.4350178027012106,
          "rotation": 12.566370614359176,
          "target": "47-ab-second-floor-corridor"
        },
        {
          "yaw": 1.627399578065992,
          "pitch": 0.5645504639954737,
          "rotation": 0,
          "target": "31-ab-first-floor-"
        },
        {
          "yaw": 2.433226270121425,
          "pitch": 0.35983404330846724,
          "rotation": 11.780972450961727,
          "target": "38-ab-third-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "36-ab-mechanical-department-corridor",
      "name": "AB Mechanical Department Corridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.05000004695361504,
          "pitch": 0.4559422585558899,
          "rotation": 0,
          "target": "37-department-of-mechanical"
        },
        {
          "yaw": 3.1331189964344075,
          "pitch": 0.5467477554981741,
          "rotation": 6.283185307179586,
          "target": "47-ab-second-floor-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "37-department-of-mechanical",
      "name": "Department of Mechanical",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6218768020610526,
          "pitch": 0.18498104882237953,
          "rotation": 12.566370614359176,
          "target": "36-ab-mechanical-department-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "38-ab-third-floor",
      "name": "AB Third floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.9767219895604633,
          "pitch": 0.483461735781356,
          "rotation": 12.566370614359176,
          "target": "41-way-physics-and-chemistry-labs"
        },
        {
          "yaw": -0.5075762498934928,
          "pitch": 0.341869461090166,
          "rotation": 5.497787143782138,
          "target": "42-ab-fourth-floor"
        },
        {
          "yaw": -1.3807926637468242,
          "pitch": 0.5225985355041018,
          "rotation": 0,
          "target": "35-ab-second-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "39-ab-civil-department-corridor",
      "name": "AB Civil Department Corridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.8787271644594066,
          "pitch": 0.6072798242698383,
          "rotation": 7.0685834705770345,
          "target": "40-department-of-civil"
        },
        {
          "yaw": -0.07710339783665532,
          "pitch": 0.34179797653597,
          "rotation": 0,
          "target": "41-way-physics-and-chemistry-labs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "40-department-of-civil",
      "name": "Department of Civil",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.3309064495115912,
          "pitch": 0.1459177813260979,
          "rotation": 0,
          "target": "39-ab-civil-department-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "41-way-physics-and-chemistry-labs",
      "name": "Way Physics and Chemistry Labs",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.010307641017092,
          "pitch": 0.42462918650135606,
          "rotation": 0,
          "target": "39-ab-civil-department-corridor"
        },
        {
          "yaw": -1.524663901581519,
          "pitch": 0.4636648739036531,
          "rotation": 0,
          "target": "38-ab-third-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "42-ab-fourth-floor",
      "name": "AB Fourth Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.478733992201974,
          "pitch": 0.18680513096078677,
          "rotation": 0.7853981633974483,
          "target": "43-ab-fourth-floor-corridor"
        },
        {
          "yaw": -0.6756129654422232,
          "pitch": 0.3701080969278223,
          "rotation": 0.7853981633974483,
          "target": "38-ab-third-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "43-ab-fourth-floor-corridor",
      "name": "AB Fourth Floor Corridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4609930152611668,
          "pitch": 0.26646381728095037,
          "rotation": 0,
          "target": "42-ab-fourth-floor"
        },
        {
          "yaw": 2.0381502040792183,
          "pitch": 0.48206301488626124,
          "rotation": 0.7853981633974483,
          "target": "44-department-of-mathematics"
        },
        {
          "yaw": -1.7260489688157854,
          "pitch": 0.3649579208067042,
          "rotation": 0,
          "target": "45-department-of-science-and-humanities"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "44-department-of-mathematics",
      "name": "Department of Mathematics",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.4484695728172774,
          "pitch": 0.240208130795029,
          "rotation": 0,
          "target": "43-ab-fourth-floor-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "45-department-of-science-and-humanities",
      "name": "Department of Science and Humanities",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0432318895029233,
          "pitch": 0.4109347880586114,
          "rotation": 0,
          "target": "43-ab-fourth-floor-corridor"
        },
        {
          "yaw": 0.017302736830307808,
          "pitch": 0.4990456958536207,
          "rotation": 0,
          "target": "46-department-of-science-and-humanities-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "46-department-of-science-and-humanities-1",
      "name": "Department of Science and Humanities 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.3834199818092507,
          "pitch": 0.24907137454959205,
          "rotation": 0,
          "target": "45-department-of-science-and-humanities"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "47-ab-second-floor-corridor",
      "name": "AB Second Floor Corridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.17137876412946618,
          "pitch": 0.33648871343376463,
          "rotation": 0,
          "target": "36-ab-mechanical-department-corridor"
        },
        {
          "yaw": 1.5451464586154229,
          "pitch": 0.6293033361854867,
          "rotation": 0,
          "target": "35-ab-second-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "48-pathway-circuit-block",
      "name": "Pathway Circuit Block",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4441946582024876,
          "pitch": 0.193537066703108,
          "rotation": 0,
          "target": "4-circuit-block"
        },
        {
          "yaw": -0.040845154191135435,
          "pitch": 0.23478704866230338,
          "rotation": 0,
          "target": "49-pathway-of-ct"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "49-pathway-of-ct",
      "name": "Pathway of CT",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.1159726562683083,
          "pitch": 0.359165174660518,
          "rotation": 0,
          "target": "48-pathway-circuit-block"
        },
        {
          "yaw": -0.06471421189304927,
          "pitch": 0.37777294796588023,
          "rotation": 0,
          "target": "50-pathway-of-cect1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "50-pathway-of-cect1",
      "name": "Pathway of CE,CT1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7274713817923022,
          "pitch": 0.2684791146466292,
          "rotation": 0,
          "target": "49-pathway-of-ct"
        },
        {
          "yaw": -0.2367209528044576,
          "pitch": 0.202832699645894,
          "rotation": 6.283185307179586,
          "target": "53-canteen"
        },
        {
          "yaw": 2.9152999457770044,
          "pitch": 0.3557640459343361,
          "rotation": 0,
          "target": "62-ce-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "51-girls-hostel",
      "name": "Girls Hostel",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.033529333631200586,
          "pitch": 0.04571674411685933,
          "rotation": 0,
          "target": "52-girls-hostel-entrance"
        },
        {
          "yaw": -3.0692752167699293,
          "pitch": 0.23347388675678893,
          "rotation": 0,
          "target": "50-pathway-of-cect1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "52-girls-hostel-entrance",
      "name": "Girls Hostel Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.13258075093743926,
          "pitch": 0.24499617906094429,
          "rotation": 0,
          "target": "71-pathways-of-hostels"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "53-canteen",
      "name": "Canteen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.441287316859647,
          "pitch": 0.21232881150912775,
          "rotation": 0,
          "target": "71-pathways-of-hostels"
        },
        {
          "yaw": 1.5887607422328918,
          "pitch": 0.1012306634508775,
          "rotation": 0,
          "target": "64-ce-block"
        },
        {
          "yaw": -2.9776368558585666,
          "pitch": 0.44321050027557973,
          "rotation": 0,
          "target": "54--canteen-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "54--canteen-entrance",
      "name": " Canteen Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7629514175145875,
          "pitch": 0.4561693404262339,
          "rotation": 0,
          "target": "53-canteen"
        },
        {
          "yaw": 1.3533156308489485,
          "pitch": 0.31153463196177533,
          "rotation": 0,
          "target": "55-veg-canteen"
        },
        {
          "yaw": -0.14436511714517408,
          "pitch": 0.4465798137915282,
          "rotation": 0,
          "target": "57-corridor-of-non-veg-canteen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "55-veg-canteen",
      "name": "Veg Canteen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.10063643805947642,
          "pitch": 0.1016888431349976,
          "rotation": 0,
          "target": "54--canteen-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "56-non-veg-canteen-entrance",
      "name": "Non-veg Canteen Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "57-corridor-of-non-veg-canteen",
      "name": "Corridor of Non-veg Canteen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.03682357335374675,
          "pitch": 0.012018659180363045,
          "rotation": 0,
          "target": "59-non-veg-canteen-"
        },
        {
          "yaw": -0.1089577705435012,
          "pitch": 0.1464687743236155,
          "rotation": 4.71238898038469,
          "target": "60-xerox-stationary-and-ice-cream-parlour"
        },
        {
          "yaw": -1.628517363162885,
          "pitch": 0.6067114798233373,
          "rotation": 0,
          "target": "54--canteen-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "58-non-veg-canteen",
      "name": "Non-Veg Canteen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.2642669977326442,
          "pitch": 0.2680669001716627,
          "rotation": 0,
          "target": "59-non-veg-canteen-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "59-non-veg-canteen-",
      "name": "Non veg Canteen ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.052198191067216015,
          "pitch": 0.5216932129069676,
          "rotation": 0,
          "target": "58-non-veg-canteen"
        },
        {
          "yaw": -1.3977543402188974,
          "pitch": 0.3707615368320454,
          "rotation": 0,
          "target": "57-corridor-of-non-veg-canteen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "60-xerox-stationary-and-ice-cream-parlour",
      "name": "Xerox, Stationary and Ice Cream Parlour",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.0658538158014874,
          "pitch": 0.40022346362345473,
          "rotation": 5.497787143782138,
          "target": "61-ice-cream-parlour"
        },
        {
          "yaw": 1.7230323385461315,
          "pitch": 0.37467561432766594,
          "rotation": 0,
          "target": "57-corridor-of-non-veg-canteen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "61-ice-cream-parlour",
      "name": "Ice Cream Parlour",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9178040957240832,
          "pitch": 0.18744180443559166,
          "rotation": 0.7853981633974483,
          "target": "60-xerox-stationary-and-ice-cream-parlour"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "62-ce-entrance",
      "name": "CE Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.03967666466146724,
          "pitch": 0.19224140122960875,
          "rotation": 0,
          "target": "63-ce-entrance-pathway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "63-ce-entrance-pathway",
      "name": "CE Entrance Pathway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.758543852418157,
          "pitch": 0.22322144932916288,
          "rotation": 0,
          "target": "67-pathway"
        },
        {
          "yaw": 1.3171780883250044,
          "pitch": 0.1838486589286763,
          "rotation": 0,
          "target": "62-ce-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "64-ce-block",
      "name": "CE Block",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6509260427404122,
          "pitch": 0.1604721847741324,
          "rotation": 0,
          "target": "53-canteen"
        },
        {
          "yaw": 1.5600270504124119,
          "pitch": 0.11885540439662812,
          "rotation": 0,
          "target": "66-pathway-"
        },
        {
          "yaw": 0.9635784139730283,
          "pitch": 0.2125421980694071,
          "rotation": 0,
          "target": "70-ground"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "65-pathway-",
      "name": "Pathway ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.4964434825605677,
          "pitch": 0.38810339397536,
          "rotation": 0,
          "target": "66-pathway-"
        },
        {
          "yaw": -0.0924704780022303,
          "pitch": 0.5276924334302713,
          "rotation": 0,
          "target": "67-pathway"
        },
        {
          "yaw": 0.18174683664873648,
          "pitch": 0.038115911237088795,
          "rotation": 12.566370614359176,
          "target": "69-basket-ball-court"
        },
        {
          "yaw": -0.7787536643711128,
          "pitch": 0.09407274160129475,
          "rotation": 0,
          "target": "68-volley-ball-court"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "66-pathway-",
      "name": "Pathway ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.03723952356139648,
          "pitch": 0.4708059693333233,
          "rotation": 0,
          "target": "65-pathway-"
        },
        {
          "yaw": -1.8177384518286583,
          "pitch": 0.27943096303905435,
          "rotation": 0,
          "target": "64-ce-block"
        },
        {
          "yaw": 2.9739920201810808,
          "pitch": 0.19606599587337392,
          "rotation": 0,
          "target": "2-admin-block"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "67-pathway",
      "name": "Pathway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7930664032548194,
          "pitch": 0.2304173653203634,
          "rotation": 0,
          "target": "65-pathway-"
        },
        {
          "yaw": 0.16410517413843984,
          "pitch": 0.1236850419181117,
          "rotation": 0,
          "target": "63-ce-entrance-pathway"
        },
        {
          "yaw": -1.535970632749173,
          "pitch": 0.10590097756272243,
          "rotation": 0.7853981633974483,
          "target": "69-basket-ball-court"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "68-volley-ball-court",
      "name": "Volley Ball court",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.2076272809684383,
          "pitch": 0.19044634045165054,
          "rotation": 0.7853981633974483,
          "target": "65-pathway-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "69-basket-ball-court",
      "name": "Basket Ball court",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0783891405884383,
          "pitch": 0.20177015464027903,
          "rotation": 0,
          "target": "65-pathway-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "70-ground",
      "name": "Ground",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.437428303017473,
          "pitch": 0.14015168181208537,
          "rotation": 0,
          "target": "64-ce-block"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "71-pathways-of-hostels",
      "name": "Pathways of Hostels",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5199998813264797,
          "pitch": 0.12159006480642631,
          "rotation": 0,
          "target": "51-girls-hostel"
        },
        {
          "yaw": 2.8542415024532604,
          "pitch": 0.3556827759935821,
          "rotation": 0,
          "target": "73-way-to-boys-hostel"
        },
        {
          "yaw": -1.648933788084351,
          "pitch": 0.4098591031492447,
          "rotation": 0,
          "target": "53-canteen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "72-way-to-boys-hostel",
      "name": "Way to Boys hostel",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7002635498339078,
          "pitch": 0.32470084260461896,
          "rotation": 0,
          "target": "74-boys-hostel"
        },
        {
          "yaw": -0.022384301919640137,
          "pitch": 0.16282737022272897,
          "rotation": 0,
          "target": "73-way-to-boys-hostel"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "73-way-to-boys-hostel",
      "name": "Way to Boys Hostel",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0991058290668168,
          "pitch": 0.30754315705954305,
          "rotation": 0,
          "target": "71-pathways-of-hostels"
        },
        {
          "yaw": 0.013998979783021781,
          "pitch": 0.06563302940266524,
          "rotation": 0,
          "target": "72-way-to-boys-hostel"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "74-boys-hostel",
      "name": "Boys Hostel",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.07661262446986328,
          "pitch": 0.1906866631761286,
          "rotation": 0,
          "target": "75-blocks-of-boys-hostel"
        },
        {
          "yaw": -1.5385333694023409,
          "pitch": 0.37720747865346027,
          "rotation": 0,
          "target": "72-way-to-boys-hostel"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "75-blocks-of-boys-hostel",
      "name": "Blocks of Boy's Hostel",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.3951453573713177,
          "pitch": 0.43255189708847297,
          "rotation": 0,
          "target": "74-boys-hostel"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
