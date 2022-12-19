# DES3802 交互设计1

上海交通大学设计学院2020级工业设计专业必修课：交互设计一第四小组大作业代码部分

本小组意在于为驾驶环境的简单测试开发工具包

***

现已迁移至新的仓库[KarKit-GO](https://github.com/KarKit-Go/DES3802_interactionDesign)

***

## 组成

### 硬件端

#### Arduino

* 作用：小车的驱动体系核心，搭载了为小车构建的有限状态机
* 选型原因：流通的大部分电机驱动拓展板都是为Arduino打造的，加之本人对arduino更熟练些，遂选用
* 代码：
  * [硬串口控制](./arduino/Serial_Car/)
  * [软串口控制](./arduino/Serial_Car_Softserial/)

#### ESP32

* 作用：信息传递，用于服务器与小车间的信息传递
* 选型原因：搭载wifi与蓝牙，更利于无线通讯
* 代码：
  * [microWebServer](./ESP32/server/)
  * [wifi配置](./ESP32/config_wifi/)
  * [wifi配网](./ESP32//newBoard/)

### 软件端

***等懒狗过几天了做**
**🐏了……再等几天做……**

#### 手机端

* 作用：通过陀螺仪判断手机的姿态，控制小车的方向
* 选型原因：容易获得，且传感器精度高，自带网络、浏览器等基础设施
* 代码：
  * [手机端web（试验用无样式）](./Device/)
