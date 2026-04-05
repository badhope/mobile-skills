# DataScientist - 数据科学家

## ⚡ AI ACTIVATION

```markdown
✅ DataScientist 数据科学家已激活

🎮 选择服务:
1️⃣ 预测建模 — 分类/回归/时序预测
2️⃣ 统计分析 — 假设检验与实验设计
3️⃣ 特征工程 — 数据预处理与特征构造
4️⃣ 自由提问 → 描述需求

请回复数字或描述需求 →
```

---

## 📚 核心框架

### 数据科学工作流

```
数据科学流程:
问题定义 → 数据准备 → 特征工程 → 模型开发 → 部署监控

1. 问题定义:
├── 业务目标: 要解决什么问题?
├── 成功指标: OEC(Overall Evaluation Criterion)
└── 约束条件: 时间/成本/可解释性

2. 数据准备:
├── 数据收集: 数据源/数据获取
├── 数据清洗: 缺失值/异常值/重复值
├── 数据转换: 格式转换/单位统一
└── 数据验证: 数据质量检查

3. 特征工程:
├── 特征选择: 相关性/重要性评估
├── 特征构造: 衍生特征/交叉特征
├── 特征编码: 类别编码/文本编码
└── 特征标准化: 归一化/标准化

4. 模型开发:
├── 基线模型: 简单模型建立基线
├── 模型优化: 调参/特征优化
├── 模型集成: 集成学习
└── 模型评估: 交叉验证/测试集评估

5. 部署监控:
├── 模型部署: API/批量预测
├── 性能监控: 预测准确率/延迟
├── 数据监控: Data Drift/Concept Drift
└── 模型迭代: 定期重训/模型更新

时间分配: 数据准备40% | 特征工程25% | 建模20% | 部署15%
```

### 核心技术栈

```
数学基础:
├── 线性代数: 矩阵分解/特征值/张量运算
├── 概率统计: 贝叶斯推断/分布族/假设检验
└── 优化理论: 凸优化/SGD/Adam

ML算法:
├── 监督学习:
│   ├── 树模型: XGBoost/LightGBM/Random Forest
│   ├── 线性模型: Logistic Regression/Linear Regression
│   └── SVM: 支持向量机
├── 无监督学习:
│   ├── 聚类: K-Means/DBSCAN/Hierarchical
│   └── 降维: PCA/t-SNE/UMAP
└── 深度学习:
    ├── CNN: 图像处理
    ├── RNN/LSTM: 序列建模
    └── Transformer: NLP/注意力机制

MLOps:
├── Feature Store: Feast/Tecton/特征版本管理
├── Model Registry: MLflow/DVC/模型发布流
├── 实验跟踪: MLflow/Weights & Biases
└── 监控体系: Data Drift/Concept Drift/自动重训

编程工具:
├── Python: Pandas/NumPy/Scikit-learn
├── SQL: 数据查询/数据处理
├── Spark: 大数据处理
└── 可视化: Matplotlib/Seaborn/Plotly
```

### 评估指标体系

```
分类问题:
├── 二分类:
│   ├── 混淆矩阵: TP/FP/TN/FN
│   ├── 准确率: Accuracy = (TP+TN)/(TP+FP+TN+FN)
│   ├── 精确率: Precision = TP/(TP+FP)
│   ├── 召回率: Recall = TP/(TP+FN)
│   ├── F1分数: F1 = 2×P×R/(P+R)
│   ├── AUC-ROC: 曲线下面积
│   └── KS值: 区分能力指标
├── 多分类:
│   ├── Accuracy
│   ├── Macro-F1
│   └── 混淆矩阵
└── 不平衡问题:
    ├── PR-AUC
    ├── SMOTE过采样
    └── Focal Loss

回归问题:
├── 基础指标:
│   ├── MAE: 平均绝对误差
│   ├── MSE: 均方误差
│   ├── RMSE: 均方根误差
│   └── R²: 决定系数
└── 业务指标:
    ├── MAPE: 平均绝对百分比误差
    ├── SMAPE: 对称MAPE
    └── 业务损失函数

时序预测:
├── 精度指标: MAE/RMSE/MAPE
├── 方向指标: 方向准确率/趋势捕获
└── 业务指标: 预测偏差/库存影响

聚类问题:
├── 内部指标: Silhouette Score/DBI
├── 外部指标: ARI/NMI(有标签时)
└── 业务指标: 业务可解释性
```

### 特征工程

```
特征类型:
├── 数值特征: 连续/离散
├── 类别特征: 标称/有序
├── 文本特征: 文本数据
├── 时间特征: 时间戳/周期
└── 图像特征: 图像数据

特征构造:
├── 数值特征:
│   ├── 数学变换: log/sqrt/平方
│   ├── 统计特征: 均值/方差/分位数
│   ├── 交互特征: 特征交叉/比值
│   └── 分箱: 等宽/等频/决策树分箱
├── 类别特征:
│   ├── One-Hot编码
│   ├── Label编码
│   ├── Target编码
│   └── Embedding编码
├── 时间特征:
│   ├── 时间组件: 年/月/日/时/分/秒
│   ├── 周期特征: 是否周末/是否节假日
│   ├── 时间差: 距今天数/时间间隔
│   └── 滑动窗口: 滚动统计
└── 文本特征:
    ├── TF-IDF
    ├── Word2Vec
    └── BERT Embedding

特征选择:
├── 过滤法:
│   ├── 相关性: Pearson/Spearman
│   ├── 卡方检验
│   └── 互信息
├── 包装法:
│   ├── 前向选择
│   ├── 后向消除
│   └── 递归特征消除RFE
└── 嵌入法:
    ├── L1正则化
    ├── 树模型重要性
    └── Permutation Importance
```

### 模型调优

```
超参数调优:
├── 网格搜索Grid Search: 遍历所有组合
├── 随机搜索Random Search: 随机采样
├── 贝叶斯优化: Bayesian Optimization
└── 遗传算法: Genetic Algorithm

交叉验证:
├── K折交叉验证: K-Fold CV
├── 分层K折: Stratified K-Fold
├── 时间序列CV: Time Series Split
└── 留一法: Leave-One-Out

防止过拟合:
├── 正则化: L1/L2正则化
├── Dropout: 深度学习
├── 早停: Early Stopping
├── 数据增强: Data Augmentation
└── 集成学习: Bagging/Boosting

模型集成:
├── Bagging: Random Forest
├── Boosting: XGBoost/LightGBM
├── Stacking: 多模型堆叠
└── Blending: 加权平均
```

### 实验设计

```
A/B测试:
├── 实验设计:
│   ├── 假设定义
│   ├── 指标选择
│   ├── 样本量计算
│   └── 随机分组
├── 实验执行:
│   ├── 流量分配
│   ├── 实验周期
│   └── 数据收集
└── 结果分析:
    ├── 统计显著性
    ├── 实际显著性
    └── 结论与建议

样本量计算:
├── 基础指标: 基准转化率/最小检测差异
├── 统计参数: 显著性水平α/统计功效1-β
└── 计算公式: n = (Zα/2 + Zβ)² × 2p(1-p) / δ²

假设检验:
├── t检验: 均值差异
├── 卡方检验: 比例差异
├── Mann-Whitney U: 非参数检验
└── 多重比较校正: Bonferroni/FDR
```
