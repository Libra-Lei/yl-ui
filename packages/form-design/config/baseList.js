
export default [
  {
    type: 'input', // 控件类型
    icon: 'edit', // 控件图标
    label: '输入框', // 控件名字
    options: { // 控件自身属性
      label: '输入框',
      defaultValue: '', // 默认值
      placeholder: '请输入',
      hidden: false, // 隐藏 -> false：显示，true：隐藏
      disabled: false // 禁用 -> false：不禁用，true：禁用
    },
    field: '', // 数据字段
    key: '',
    rules: [ // 表单校验 schema
      {
        required: false, // 必须填写
        message: '必填项',
        trigger: 'blur'
      }
    ]
  },
  {
    type: 'checkbox', // 控件类型
    icon: 'check_box', // 控件图标
    label: '多选框', // 控件名字
    options: { // 控件自身属性
      label: '多选框',
      defaultValue: [],
      options: [
        {
          value: "1",
          label: "选项1",
        },
        {
          value: "2",
          label: "选项2",
        },
        {
          value: "3",
          label: "选项3",
        }
      ],
      disabled: false // 禁用 -> false：不禁用，true：禁用
    },
    field: '', // 数据字段
    key: '', // 本地唯一标识
    rules: [ // 表单校验 schema
      {
        required: false, // 必须填写
        message: '必填项',
        trigger: 'blur'
      }
    ]
  },
  {
    type: 'radio', // 控件类型
    icon: 'radio_button_checked', // 控件图标
    label: '单选框', // 控件名字
    options: { // 控件自身属性
      label: '单选框',
      defaultValue: null,
      options: [
        {
          value: "1",
          label: "选项1",
        },
        {
          value: "2",
          label: "选项2",
        },
        {
          value: "3",
          label: "选项3",
        }
      ],
      disabled: false // 禁用 -> false：不禁用，true：禁用
    },
    field: '', // 数据字段
    key: '', // 本地唯一标识
    rules: [ // 表单校验 schema
      {
        required: false, // 必须填写
        message: '必填项',
        trigger: 'blur'
      }
    ]
  },
  {
    type: 'textarea', // 控件类型
    icon: 'article', // 控件图标
    label: '文本域', // 控件名字
    options: { // 控件自身属性
      label: '文本域',
      placeholder: '请输入',
      defaultValue: '',
      counter: 200,
      width: '100%',
      rows: 8,
      disabled: false // 禁用 -> false：不禁用，true：禁用
    },
    field: '', // 数据字段
    key: '', // 本地唯一标识
    rules: [ // 表单校验 schema
      {
        required: false, // 必须填写
        message: '必填项',
        trigger: 'blur'
      }
    ]
  },
  {
    type: 'switch', // 控件类型
    icon: 'toggle_off', // 控件图标
    label: '开关', // 控件名字
    options: { // 控件自身属性
      label: '开关',
      defaultValue: false,
      onText: '开',
      offText: '关',
      color: 'primary',
      disabled: false // 禁用 -> false：不禁用，true：禁用
    },
    field: '', // 数据字段
    key: '', // 本地唯一标识
    rules: [ // 表单校验 schema
      {
        required: false, // 必须填写
        message: '必填项',
        trigger: 'blur'
      }
    ]
  },
  {
    type: 'select', // 控件类型
    icon: 'arrow_drop_down_circle', // 控件图标
    label: '下拉选择框', // 控件名字
    options: { // 控件自身属性
      label: '下拉选择框',
      placeholder: '请选择',
      singleValue: null,
      multipleValue: [],
      multiple: true,
      color: 'primary',
      options: [
        {
          label: '选项1',
          value: 1
        },
        {
          label: '选项2',
          value: 2
        },
        {
          label: '选项3',
          value: 3
        }
      ],
      disabled: false // 禁用 -> false：不禁用，true：禁用
    },
    field: '', // 数据字段
    key: '', // 本地唯一标识
    rules: [ // 表单校验 schema
      {
        required: false, // 必须填写
        message: '必填项',
        trigger: 'blur'
      }
    ]
  },
  {
    type: 'input-number', // 控件类型
    icon: 'calculate', // 控件图标
    label: '计数器', // 控件名字
    options: { // 控件自身属性
      label: '计数器',
      defaultValue: 0,
      color: 'primary',
      min: 0,
      max: 10,
      size: 'default',
      step: 5,
      disabled: false // 禁用 -> false：不禁用，true：禁用
    },
    field: '', // 数据字段
    key: '', // 本地唯一标识
    rules: [ // 表单校验 schema
      {
        required: false, // 必须填写
        message: '必填项',
        trigger: 'blur'
      }
    ]
  },
  {
    type: 'datepicker', // 控件类型
    icon: 'today', // 控件图标
    label: '日期选择器', // 控件名字
    options: { // 控件自身属性
      label: '日期选择器',
      defaultValue: null, // 默认值
      placeholder: '请选择',
      hidden: false, // 隐藏 -> false：显示，true：隐藏
      disabled: false // 禁用 -> false：不禁用，true：禁用
    },
    field: '', // 数据字段
    key: '',
    rules: [ // 表单校验 schema
      {
        required: false, // 必须填写
        message: '必填项',
        trigger: 'blur'
      }
    ]
  },

  {
    type: 'button', // 控件类型
    icon: 'thumb_up_off_alt', // 控件图标
    label: '按钮', // 控件名字
    options: { // 控件自身属性
      label: '按钮',
      type: 'filled',
      color: 'primary',
      size: 'default',
      left: '90', // margin-left: 100%
      disabled: false // 禁用 -> false：不禁用，true：禁用
    },
    field: '', // 数据字段
    key: '' // 本地唯一标识
  }
]
