# 如何阅读本书

本书一共分为五个部分：**走近Java、自动内存管理、虚拟机执行子系统、程序编译与代码优化、**
**高效并发。**各个部分之间基本上是互相独立的，没有必然的前后依赖关系，读者可以从任何一个感兴
趣的专题开始阅读，但是每个部分各个章节间则有先后顺序。

## 第一部分　走近Java

本书的第一部分为后文的研究和讲解建立了良好的基础。虽然了解Java技术的来龙去脉，以及编
译自己的OpenJDK对于读者理解Java虚拟机并不是必须的，但是这些准备过程可以为走近Java技术和
Java虚拟机提供良好的引导。第一部分只有第1章：
第1章　介绍了Java技术体系过去、现在的情况以及未来的发展趋势，并在实践中介绍了如何自己
编译一个OpenJDK 12。
第3版更新：续写了Java技术发展史，这几年Java世界着实发生了很多值得记录的大事件；完全
重写了第2版对未来Java的展望预测，当时畅想的Java新发展新变化全部如约而至，是时候把聚光灯交
给下一个十年的Java了；OpenJDK开发、编译也发生过不小的变动，本次更新将OpenJDK编译的版本
提升到12。

第二部分　自动内存管理
因为程序员把控制内存的权力交给了Java虚拟机，所以可以在编码的时候享受自动内存管理的诸
多优势，不过也正因为这个原因，一旦出现内存泄漏和溢出方面的问题，如果不了解虚拟机是怎样使
用内存的，那排查错误将会成为一项异常艰难的工作。第二部分包括第2～5章：
第2章　介绍了**虚拟机中内存是如何划分的，哪部分区域、什么样的代码和操作可能导致内存溢出**
**异常**，并讲解了各个区域出现内存溢出异常的常见原因。

第3版更新：Java运行期数据区域是虚拟机的基础结构，尽管JDK版本在快速发展，这块内容
仍然保持了相对的稳定，主要的变化是JDK 8时期的永久代的落幕和元空间的登场；除此以外，本章
着重修正了第2版中对Java虚拟机栈描述的含糊与偏差之处，还更新了部分测试代码，避免因JDK版本
更迭导致与书中不一样的结果。

第3章　介绍了**垃圾收集的算法和HotSpot虚拟机中提供的几款垃圾收集器**的特点及运作原理。通
过代码实例验证了Java虚拟机中自动内存分配及回收的主要规则。

第3版更新：由于撰写第2版时JDK 7刚刚发布，G1收集器尚无实践数据可查，书中对此讲述得
比较含糊，本次更新完全重写了这部分内容，并重点增加了JDK 11、12中新出现的ZGC和Shenandoah
两款低延迟全并发收集器的详细原理解析，这是垃圾收集器未来的发展方向。对其他与收集器相关的
更新，如统一收集器接口、Epsilon等也都做了对应介绍。此外，针对HotSpot中收集器实现的几个关
键技术点，如解决跨代引用的记忆集与卡表、解决并发标记的增量更新和原始快照算法，还有内存
读、写屏障等技术都增加了专门的小节来进行介绍，以便帮读者在后续深入阅读HotSpot设计与源码时
打下良好的理论基础。
第4章　介绍了随JDK发布的基础命令行工具与可视化的故障处理工具的使用方法。
第3版更新：Java虚拟机的各种监控、管理等辅助工具的功能日益强大，几乎每个版本在这些
工具的数量、功能上都会或多或少有所变化，除了将第2版涉及的工具的变化依照JDK版本进行升级
外，本章还新增了对JDK 9中加入的JHSDB的使用讲解，并增加了对JFR和JMC的工作原理和使用方法
的介绍，以及对部分JDK外部的工具（如JIT Watch）的简要介绍。
第5章　分享了几个比较有代表性的实际案例，还准备了一个所有开发人员都能“亲身实战”的练
习，希望读者能通过实践来获得故障处理和调优的经验。
第3版更新：对案例部分进行了更新和增补，着重补充了与前3章新增内容相对应的问题处理案
例。不过对实战部分，软件版本的落后并未影响笔者要表达的内容，原有的实战目前仍具有相同的实
战价值，在第3版里笔者也并未刻意将Eclipse和HotSpot升级后重写一次。



# 阅读书籍

深入理解Java虚拟机：JVM高级特性与最佳实践（第3版）[周志明] .pdf