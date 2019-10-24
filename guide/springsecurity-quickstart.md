---
sidebarDepth: 3
---

# 入门

::: tip
由于springboot的发展，对于java的权限框架springsecurity的使用率也得到了快速提升，很多学生工作后都在询问springsecurity相关的问题，这里通过这篇技术文章由浅到深带大家学习一下springsecurity。
:::

## 快速开始

### 创建数据库

这里只考虑权限控制相关的数据管理。这里我们采用RBAC的权限设计模型，基于角色进行访问控制。

<p class="demo">
    <img src="/img/rbac.png"/>
</p>


在这里我们暂时不考虑权限，先考虑用户和角色。

创建用户表：

```sql
DROP TABLE IF EXISTS t_user;

CREATE TABLE `t_user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
```

创建角色表：

```sql
DROP TABLE IF EXISTS t_role;

CREATE TABLE `t_role` (
  `id` bigint(20) NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
```

创建用户-角色表：

```sql
DROP TABLE IF EXISTS t_user_role;

CREATE TABLE `t_user_role` (
  `user_id` bigint(20) NOT NULL,
  `role_id` bigint(20) NOT NULL,
  PRIMARY KEY (`user_id`,`role_id`),
  KEY `fk_role_id` (`role_id`),
  CONSTRAINT `fk_role_id` FOREIGN KEY (`role_id`) REFERENCES `t_role` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_user_id` FOREIGN KEY (`user_id`) REFERENCES `t_user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
```

初始化数据：

```sql
INSERT INTO `t_role` VALUES (1, 'ROLE_ADMIN');
INSERT INTO `t_role` VALUES (2, 'ROLE_USER');

INSERT INTO `t_user` VALUES (1, 'admin', '123');
INSERT INTO `t_user` VALUES (2, 'user', '123');

INSERT INTO `t_user_role` VALUES (1, 1);
INSERT INTO `t_user_role` VALUES (2, 2);
```



::: tip 注意了哦
角色名称"ROLE_XXX"这种格式是springsecurity规定的，一定不要乱起。
:::
