{"filter":false,"title":"jasmine-testing.js","tooltip":"/assets/javascript/testing/jasmine-testing.js","undoManager":{"mark":1,"position":1,"stack":[[{"start":{"row":35,"column":8},"end":{"row":35,"column":19},"action":"remove","lines":["setFixtures"],"id":1055},{"start":{"row":35,"column":8},"end":{"row":35,"column":19},"action":"insert","lines":["setFixtures"]}],[{"start":{"row":39,"column":3},"end":{"row":41,"column":6},"action":"remove","lines":[" it(\"should disable all Simon buttons\", function() {","        expect(disableButtons()).toBe(document.getElementById(\"green\").disabled = true);","    })"],"id":1056},{"start":{"row":39,"column":3},"end":{"row":45,"column":14},"action":"insert","lines":["it(\"should disable all Simon buttons\", function() {","                disableButtons();","                let res = document.getElementById('green').disabled;","                ","                expect(res).toBe(true);","                ","            })"]}],[{"start":{"row":11,"column":8},"end":{"row":11,"column":12},"action":"remove","lines":["    "],"id":1057},{"start":{"row":12,"column":0},"end":{"row":12,"column":4},"action":"remove","lines":["    "]},{"start":{"row":19,"column":60},"end":{"row":19,"column":61},"action":"insert","lines":[" "]},{"start":{"row":19,"column":79},"end":{"row":19,"column":80},"action":"remove","lines":[" "]},{"start":{"row":37,"column":0},"end":{"row":37,"column":4},"action":"remove","lines":["    "]},{"start":{"row":39,"column":0},"end":{"row":39,"column":5},"action":"insert","lines":["     "]},{"start":{"row":40,"column":0},"end":{"row":40,"column":2},"action":"remove","lines":["  "]},{"start":{"row":40,"column":12},"end":{"row":40,"column":14},"action":"remove","lines":["  "]},{"start":{"row":41,"column":0},"end":{"row":41,"column":4},"action":"remove","lines":["    "]},{"start":{"row":42,"column":0},"end":{"row":42,"column":16},"action":"remove","lines":["                "]},{"start":{"row":43,"column":0},"end":{"row":43,"column":4},"action":"remove","lines":["    "]},{"start":{"row":44,"column":0},"end":{"row":44,"column":6},"action":"remove","lines":["      "]},{"start":{"row":44,"column":0},"end":{"row":45,"column":0},"action":"insert","lines":["",""]},{"start":{"row":45,"column":8},"end":{"row":45,"column":10},"action":"remove","lines":["  "]},{"start":{"row":45,"column":8},"end":{"row":45,"column":10},"action":"insert","lines":["})"]},{"start":{"row":46,"column":4},"end":{"row":47,"column":0},"action":"remove","lines":["        })",""]}]]},"ace":{"folds":[],"scrolltop":347.3125,"scrollleft":0,"selection":{"start":{"row":48,"column":0},"end":{"row":48,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":5,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1562589190777,"hash":"4a60a709fbe843db0457e92dac9a00c6f2297f8f"}