module.exports = {
	name: "TabBar",
	examples: [
		{
			title: "Default TabBar",
			controller: function(element) {
				let tabBar = element.getElementsByTagName("ui-tab-bar")[0]
				let tabBarItem1 = tabBar.getElementsByTagName("ui-tab-bar-item")[0]
				let tabBarItem2 = tabBar.getElementsByTagName("ui-tab-bar-item")[1]
				let tabBarItem3 = tabBar.getElementsByTagName("ui-tab-bar-item")[2]

				function setActiveItem(itemIndex) {
					tabBarItem1.active = false
					tabBarItem2.active = false
					tabBarItem3.active = false

					if (itemIndex == 1) {
						tabBarItem2.active = true
					} else if (itemIndex == 2) {
						tabBarItem3.active = true
					} else {
						tabBarItem1.active = true
					}
				}

				tabBarItem1.onclick = () => setActiveItem(0)
				tabBarItem2.onclick = () => setActiveItem(1)
				tabBarItem3.onclick = () => setActiveItem(2)
			},
			template: `
            <ui-tab-bar>
               <ui-tab-bar-item id="item1" active="true">Item 1</ui-tab-bar-item>
               <ui-tab-bar-item id="item2">Item 2</ui-tab-bar-item>
               <ui-tab-bar-item id="item3">Item 3</ui-tab-bar-item>
            </ui-tab-bar>
         `
		}
	]
}
